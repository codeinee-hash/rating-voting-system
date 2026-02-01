import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/consts/routes';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { FC } from 'react';
import type { Cinema } from '../model/types';

interface SimilarMoviesProps {
  movies: Cinema[];
  getRating: (id: string) => { average: number; count: number };
}

export const SimilarMovies: FC<SimilarMoviesProps> = ({
  movies,
  getRating,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-none p-4!"
    >
      <h4 className="text-sm font-semibold text-white mb-3! flex items-center gap-2">
        <div className="w-1 h-4 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
        {t('cinema.similarMovies')}
      </h4>

      <div className="space-y-2!">
        {movies.map((relatedCinema) => {
          const relatedRating = getRating(relatedCinema.id);
          return (
            <Link
              key={relatedCinema.id}
              to={ROUTES.cinema(relatedCinema.id)}
              className="block group"
            >
              <div className="bg-white/5 backdrop-blur-sm flex gap-3! p-2! rounded-lg transition-all duration-200 border border-transparent">
                <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0 bg-gray-200 shadow-sm">
                  <img
                    src={relatedCinema.image}
                    alt={t(relatedCinema.title)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-sm font-medium text-white transition-colors truncate">
                    {t(relatedCinema.title)}
                  </h5>
                  <div className="flex items-center gap-1! mt-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium text-gray-600">
                      {relatedRating.average.toFixed(1)}
                    </span>
                    <span className="text-xs text-gray-400">
                      • {relatedCinema.releaseYear}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}

        {movies.length === 0 && (
          <p className="text-xs text-gray-500 text-center py-2!">
            {t('cinema.noSimilar', 'No similar movies available')}
          </p>
        )}
      </div>
    </motion.div>
  );
};
