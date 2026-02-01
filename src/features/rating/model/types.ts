import type { CinemaId } from '@/entities/cinema';

export interface Review {
  text: string;
  date: string;
}

export interface RatingData {
  cinemaId: CinemaId;
  totalStars: number;
  count: number;
  average: number;
}

export interface UserVote {
  cinemaId: CinemaId;
  stars: number;
  review?: Review;
}
