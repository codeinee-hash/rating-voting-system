import { StarRating } from '@/shared/ui/star-rating';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface RatingHeaderProps {
  hasUserVote: boolean;
  displayRating: number;
  onRate: (stars: number) => void;
  starsCount?: number;
}

export const RatingHeader: FC<RatingHeaderProps> = ({
  hasUserVote,
  displayRating,
  onRate,
  starsCount,
}) => {
  const { t } = useTranslation();

  return (
    <div className="text-center space-y-2!">
      <h3 className="text-lg font-semibold text-white">
        {hasUserVote ? t('rating.yourRating') : t('rating.rateThis')}
      </h3>

      <div className="flex flex-col items-center justify-center gap-2">
        <StarRating
          size="lg"
          value={displayRating}
          onChange={onRate}
          className="justify-center"
        />
        {hasUserVote && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium text-indigo-600"
          >
            {t('rating.rated', { stars: starsCount })}
          </motion.div>
        )}
      </div>
    </div>
  );
};
