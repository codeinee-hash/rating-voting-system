import { create } from 'zustand';
import { MOCK_CINEMAS, type CinemaId } from '@/entities/cinema';
import type { RatingData, UserVote } from './types';

interface RatingState {
  ratings: Record<CinemaId, RatingData>;
  userVotes: Record<CinemaId, UserVote>;

  vote: (cinemaId: CinemaId, stars: number, reviewText?: string) => void;
  getRating: (cinemaId: CinemaId) => RatingData;
  getUserVote: (cinemaId: CinemaId) => UserVote | undefined;
  resetVote: (cinemaId: CinemaId) => void;
}

const round = (num: number) => Math.round(num * 10) / 10;

const getInitialRating = (cinemaId: CinemaId): RatingData => {
  const cinema = MOCK_CINEMAS.find((c) => c.id === cinemaId);
  const initial = cinema?.rating || { totalStars: 0, count: 0 };
  return {
    cinemaId,
    totalStars: initial.totalStars,
    count: initial.count,
    average: initial.count > 0 ? round(initial.totalStars / initial.count) : 0,
  };
};

export const useRatingStore = create<RatingState>((set, get) => ({
  ratings: {},
  userVotes: {},

  vote: (cinemaId, stars, reviewText) => {
    set((state) => {
      const prevVote = state.userVotes[cinemaId];
      const currentRating =
        state.ratings[cinemaId] || getInitialRating(cinemaId);

      let newTotalStars = currentRating.totalStars;
      let newCount = currentRating.count;
      if (prevVote) {
        newTotalStars -= prevVote.stars;
      } else {
        newCount += 1;
      }
      newTotalStars += stars;

      const newAverage = newCount > 0 ? round(newTotalStars / newCount) : 0;
      const newUserVote: UserVote = {
        cinemaId,
        stars,
        review:
          reviewText !== undefined
            ? {
                text: reviewText,
                date: new Date().toISOString(),
              }
            : prevVote?.review,
      };

      return {
        ratings: {
          ...state.ratings,
          [cinemaId]: {
            ...currentRating,
            totalStars: newTotalStars,
            count: newCount,
            average: newAverage,
          },
        },
        userVotes: {
          ...state.userVotes,
          [cinemaId]: newUserVote,
        },
      };
    });
  },

  getRating: (cinemaId) => {
    return get().ratings[cinemaId] || getInitialRating(cinemaId);
  },

  getUserVote: (cinemaId) => get().userVotes[cinemaId],

  resetVote: (cinemaId) => {
    set((state) => {
      const prevVote = state.userVotes[cinemaId];
      if (!prevVote) return state;

      const currentRating =
        state.ratings[cinemaId] || getInitialRating(cinemaId);

      const newTotal = currentRating.totalStars - prevVote.stars;
      const newCount = currentRating.count - 1;
      const newAverage = newCount > 0 ? round(newTotal / newCount) : 0;

      const { [cinemaId]: _, ...remainingVotes } = state.userVotes;

      return {
        ratings: {
          ...state.ratings,
          [cinemaId]: {
            ...currentRating,
            totalStars: newTotal,
            count: newCount,
            average: newAverage,
          },
        },
        userVotes: remainingVotes,
      };
    });
  },
}));
