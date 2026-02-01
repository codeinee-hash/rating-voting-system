export type CinemaId = string;

export interface Cinema {
  id: CinemaId;
  title: string;
  image: string;
  description: string;
  genre: string;
  releaseYear: number;
  rating?: {
    totalStars: number;
    count: number;
  };
}
