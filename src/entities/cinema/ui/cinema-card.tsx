import { ROUTES } from '@/shared/consts/routes';
import { Card } from '@/shared/ui/card';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { buttonVariants } from '@/shared/ui/button';
import type { Cinema } from '../model/types';

interface CinemaCardProps {
  cinema: Cinema;
  averageRating: number;
  votesCount: number;
  index?: number;
}

export const CinemaCard: FC<CinemaCardProps> = ({
  cinema,
  averageRating,
  votesCount,
  index = 0,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card hover className="h-full flex flex-col overflow-hidden group">
        <div className="aspect-video w-full overflow-hidden bg-gray-100 relative">
          <img
            src={cinema.image}
            alt={t(cinema.title)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2! py-1! rounded-md shadow-sm flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-sm text-yellow-400">
              {averageRating.toFixed(1)}
            </span>
          </div>
          <div className="absolute top-2 left-2 flex gap-1 flex-wrap max-w-[80%]">
            <span className="bg-black/70 backdrop-blur-sm text-white px-2! py-0.5! rounded text-xs font-medium border border-white/10">
              {cinema.genre}
            </span>
            <span className="bg-indigo-600/90 backdrop-blur-sm text-white px-2! py-0.5! rounded text-xs font-medium border border-white/10 shadow-sm">
              {cinema.releaseYear}
            </span>
          </div>
        </div>

        <div className="p-3! flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2!">
            {t(cinema.title)}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 mb-4! flex-1">
            {t(cinema.description)}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4! border-t border-white/10">
            <span className="text-xs text-gray-500">
              {votesCount} {t('common.votes')}
            </span>
            <Link
              to={ROUTES.cinema(cinema.id)}
              className={buttonVariants('secondary', 'sm')}
            >
              {t('common.rateNow')}
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
