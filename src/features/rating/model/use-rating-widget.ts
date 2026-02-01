import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import type { CinemaId } from '@/entities/cinema';
import { useRatingStore } from './use-rating-store';

export const useRatingWidget = (cinemaId: CinemaId) => {
  const { t } = useTranslation();
  const { getRating, getUserVote, vote, resetVote } = useRatingStore();

  const ratingData = getRating(cinemaId);
  const userVote = getUserVote(cinemaId);

  const [isEditingReview, setIsEditingReview] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const displayRating = userVote ? userVote.stars : 0;

  const handleRate = (stars: number) => {
    vote(cinemaId, stars, userVote?.review?.text);

    if (!userVote) {
      setSuccessMessage('rating.thanks');
      setTimeout(() => setSuccessMessage(null), 2000);
    }
  };

  const handleReviewSubmit = (text: string) => {
    if (displayRating === 0) return;

    vote(cinemaId, displayRating, text);
    setIsEditingReview(false);
    toast.success(t('rating.thanksReview'));
  };

  const handleClear = () => {
    resetVote(cinemaId);
    setIsEditingReview(false);
  };

  return {
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
  };
};
