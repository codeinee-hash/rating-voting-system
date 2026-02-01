import { Star } from 'lucide-react';
import type { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Cinema } from '../model/types';

interface CinemaDetailProps {
  cinema: Cinema;
  averageRating: number;
  votesCount: number;
  ratingWidget?: ReactNode;
  similarMovies?: ReactNode;
}

export const CinemaDetail: FC<CinemaDetailProps> = ({
  cinema,
  averageRating,
  votesCount,
  ratingWidget,
  similarMovies,
}) => {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2! gap-8! items-start">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6!"
      >
        <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-gray-200">
          <img
            src={cinema.image}
            alt={t(cinema.title)}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4!">
          <div>
            <h1 className="text-3xl font-bold text-white">{t(cinema.title)}</h1>
            <div className="flex items-center gap-2 text-gray-300 mt-2!">
              <div className="flex items-center gap-1 bg-yellow-500/20 px-2! py-0.5! rounded text-yellow-300 font-medium text-sm border border-yellow-500/30">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {averageRating.toFixed(1)} / 5
              </div>
              <span className="text-sm">
                • {votesCount} {t('common.votes')}
              </span>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {t(cinema.description)}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="md:sticky md:top-20! space-y-4!"
      >
        {ratingWidget}
        {similarMovies}
      </motion.div>
    </div>
  );
};
