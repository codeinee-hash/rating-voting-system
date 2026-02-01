import { useRatingStore } from '@/features/rating';
import { MOCK_CINEMAS, CinemaCard } from '@/entities/cinema';
import { CinemaFilters, useCinemaFilters } from '@/features/cinema-filter';
import { useTranslation } from 'react-i18next';
import type { FC } from 'react';

export const HomePage: FC = () => {
  const { t } = useTranslation();
  const getRating = useRatingStore((state) => state.getRating);

  const {
    searchQuery,
    setSearchQuery,
    selectedGenre,
    setSelectedGenre,
    selectedYears,
    toggleYear,
    resetFilters,
    filteredCinemas,
    hasActiveFilters,
  } = useCinemaFilters(MOCK_CINEMAS);

  return (
    <div className="container mx-auto! px-4! py-8!">
      <div className="mb-12! text-center space-y-4! flex flex-col items-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          {t('header.title')}
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center">
          {t('header.vote')}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6! mb-8!">
        <CinemaFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
          selectedYears={selectedYears}
          onYearToggle={toggleYear}
          onReset={resetFilters}
          hasActiveFilters={hasActiveFilters}
        />

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCinemas.map((cinema, index) => {
              const { average, count } = getRating(cinema.id);

              return (
                <CinemaCard
                  key={cinema.id}
                  cinema={cinema}
                  averageRating={average}
                  votesCount={count}
                  index={index}
                />
              );
            })}

            {filteredCinemas.length === 0 && (
              <div className="col-span-full py-12! text-center text-gray-400">
                {t('common.noResults')}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
