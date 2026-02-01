import { Card } from '@/shared/ui/card';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { FC } from 'react';
import type { CinemaId } from '@/entities/cinema';
import { useRatingWidget } from '../model/use-rating-widget';
import { RatingHeader } from './rating-header';
import { RatingUserReview } from './rating-user-review';
import { RatingFooter } from './rating-footer';

interface RatingWidgetProps {
  cinemaId: CinemaId;
}

export const RatingWidget: FC<RatingWidgetProps> = ({ cinemaId }) => {
  const {
    ratingData,
    userVote,
    displayRating,
    isEditingReview,
    successMessage,
    setIsEditingReview,
    handleRate,
    handleReviewSubmit,
    handleClear,
    t,
  } = useRatingWidget(cinemaId);

  return (
    <Card className="p-4! w-full mx-auto space-y-6!">
      <RatingHeader
        hasUserVote={!!userVote}
        displayRating={displayRating}
        onRate={handleRate}
        starsCount={userVote?.stars}
      />

      <AnimatePresence mode="wait">
        {successMessage && (
          <motion.div
            key={successMessage}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center justify-center gap-2 text-green-600 font-medium bg-green-50 p-3! rounded-lg!"
          >
            <CheckCircle className="w-5 h-5" />
            <span>{t(successMessage)}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <RatingUserReview
        reviewText={userVote?.review?.text}
        reviewDate={userVote?.review?.date}
        isEditingReview={isEditingReview}
        onEditToggle={setIsEditingReview}
        onSubmit={handleReviewSubmit}
        isVoteRequired={!userVote}
      />

      <RatingFooter
        average={ratingData.average}
        count={ratingData.count}
        hasUserVote={!!userVote}
        onClear={handleClear}
      />
    </Card>
  );
};
