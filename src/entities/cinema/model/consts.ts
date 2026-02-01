import type { Cinema } from './types';

export interface GenreOption {
  value: string;
  label: string;
}

export const GENRES: GenreOption[] = [
  { value: 'Sci-Fi', label: 'genres.scifi' },
  { value: 'Action', label: 'genres.action' },
  { value: 'Crime', label: 'genres.crime' },
];

export const RELEASE_YEARS: number[] = [2024, 2014, 2010, 2008, 1994];

export const MOCK_CINEMAS: Cinema[] = [
  {
    id: '1',
    title: 'cinema.inception.title',
    image:
      'https://cdn2.psychologytoday.com/assets/styles/manual_crop_4_3_1200x900/public/blogs/55565/2011/11/78986-69676.jpg?itok=d9YJuZQU',
    description: 'cinema.inception.description',
    genre: 'Sci-Fi',
    releaseYear: 2010,
    rating: {
      totalStars: 48,
      count: 10,
    },
  },
  {
    id: '2',
    title: 'cinema.darkKnight.title',
    image:
      'https://images.justwatch.com/poster/116082563/s718/the-dark-knight.jpg',
    description: 'cinema.darkKnight.description',
    genre: 'Action',
    releaseYear: 2008,
    rating: {
      totalStars: 50,
      count: 10,
    },
  },
  {
    id: '3',
    title: 'cinema.interstellar.title',
    image:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800',
    description: 'cinema.interstellar.description',
    genre: 'Sci-Fi',
    releaseYear: 2014,
  },
  {
    id: '4',
    title: 'cinema.dune2.title',
    image:
      'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800',
    description: 'cinema.dune2.description',
    genre: 'Sci-Fi',
    releaseYear: 2024,
    rating: {
      totalStars: 22,
      count: 5,
    },
  },
  {
    id: '5',
    title: 'cinema.pulpFiction.title',
    image:
      'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=800',
    description: 'cinema.pulpFiction.description',
    genre: 'Crime',
    releaseYear: 1994,
  },
];
