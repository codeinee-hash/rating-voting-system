import { RatingWidget, useRatingStore } from '@/features/rating';
import {
  MOCK_CINEMAS,
  CinemaDetail,
  SimilarMovies,
  useSimilarMovies,
} from '@/entities/cinema';
import { ROUTES } from '@/shared/consts/routes';
import { cn } from '@/shared/lib/css';
import { buttonVariants } from '@/shared/ui/button';
import { ArrowLeft } from 'lucide-react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, useParams } from 'react-router-dom';

export const CinemaPage: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const cinema = MOCK_CINEMAS.find((cinema) => cinema.id === id);

  const getRating = useRatingStore((state) => state.getRating);
  const similarMovies = useSimilarMovies(cinema);

  if (!cinema) {
    return <Navigate to={ROUTES.home} replace />;
  }

  const { average, count } = getRating(cinema.id);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto! px-4! pt-8! pb-12!">
        <Link
          to={ROUTES.home}
          className={cn(
            buttonVariants('outline', 'sm'),
            'mb-6! -ml-2! inline-flex items-center gap-2'
          )}
        >
          <ArrowLeft className="w-4 h-4" /> {t('common.back')}
        </Link>

        <CinemaDetail
          cinema={cinema}
          averageRating={average}
          votesCount={count}
          ratingWidget={<RatingWidget cinemaId={cinema.id} />}
          similarMovies={
            <SimilarMovies movies={similarMovies} getRating={getRating} />
          }
        />
      </div>
    </div>
  );
};
