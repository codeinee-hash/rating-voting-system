import { useState, useMemo } from 'react';
import type { Cinema } from '@/entities/cinema';
import { useTranslation } from 'react-i18next';

export const useCinemaFilters = (initialCinemas: Cinema[]) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [selectedYears, setSelectedYears] = useState<number[]>([]);

  const filteredCinemas = useMemo(() => {
    return initialCinemas.filter((cinema) => {
      const translatedTitle = t(cinema.title).toLowerCase();
      const matchesSearch = translatedTitle.includes(searchQuery.toLowerCase());

      const matchesGenre = selectedGenre
        ? cinema.genre === selectedGenre
        : true;

      const matchesYear =
        selectedYears.length > 0
          ? selectedYears.includes(cinema.releaseYear)
          : true;

      return matchesSearch && matchesGenre && matchesYear;
    });
  }, [initialCinemas, searchQuery, selectedGenre, selectedYears, t]);

  const toggleYear = (toggleYear: number) => {
    setSelectedYears((prev) =>
      prev.includes(toggleYear)
        ? prev.filter((year) => year !== toggleYear)
        : [...prev, toggleYear]
    );
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedGenre('');
    setSelectedYears([]);
  };

  const hasActiveFilters = Boolean(
    searchQuery || selectedGenre || selectedYears.length > 0
  );

  return {
    searchQuery,
    setSearchQuery,
    selectedGenre,
    setSelectedGenre,
    selectedYears,
    toggleYear,
    resetFilters,
    filteredCinemas,
    hasActiveFilters,
  };
};
