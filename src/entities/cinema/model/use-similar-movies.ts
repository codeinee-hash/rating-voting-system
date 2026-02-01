import { useMemo } from 'react';
import type { Cinema } from '../model/types';
import { MOCK_CINEMAS } from '../model/consts';

export const useSimilarMovies = (
  currentCinema?: Cinema,
  limit: number = 3
): Cinema[] => {
  return useMemo<Cinema[]>(() => {
    if (!currentCinema) return [];

    return MOCK_CINEMAS.filter(
      (cinema) =>
        cinema.id !== currentCinema.id && cinema.genre === currentCinema.genre
    ).slice(0, limit);
  }, [currentCinema, limit]);
};
