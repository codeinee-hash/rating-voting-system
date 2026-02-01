import { Input } from '@/shared/ui/input';
import { Select } from '@/shared/ui/select';
import { Checkbox } from '@/shared/ui/checkbox';
import { Button } from '@/shared/ui/button';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GENRES, RELEASE_YEARS, type GenreOption } from '@/entities/cinema';
import { useMemo, type FC } from 'react';

interface CinemaFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  selectedYears: number[];
  onYearToggle: (year: number) => void;
  onReset: () => void;
  hasActiveFilters: boolean;
}

export const CinemaFilters: FC<CinemaFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedGenre,
  onGenreChange,
  selectedYears,
  onYearToggle,
  onReset,
  hasActiveFilters,
}) => {
  const { t } = useTranslation();

  const genreOptions = useMemo<GenreOption[]>(() => {
    return GENRES.map((genre) => ({
      value: genre.value,
      label: t(genre.label),
    }));
  }, [t]);

  return (
    <div className="w-full md:w-1/4! space-y-4!">
      <Input
        placeholder={t('common.search', 'Search by title...')}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <Select
        placeholder={t('common.selectGenre', 'Select Genre')}
        options={genreOptions}
        value={selectedGenre}
        onValueChange={onGenreChange}
      />

      <div className="space-y-2!">
        <label className="text-sm font-medium text-gray-300 block">
          {t('common.releaseYear')}
        </label>
        <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto p-2! border border-white/10 rounded-lg bg-white/5">
          {RELEASE_YEARS.map((year) => (
            <Checkbox
              key={year}
              label={year.toString()}
              checked={selectedYears.includes(year)}
              onChange={() => onYearToggle(year)}
            />
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          className="w-full mt-2! flex items-center justify-center gap-2"
        >
          <X className="w-4 h-4" />
          {t('common.resetFilters', 'Reset Filters')}
        </Button>
      )}
    </div>
  );
};
