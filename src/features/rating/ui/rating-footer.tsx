import { Trash2 } from 'lucide-react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface RatingFooterProps {
  average: number;
  count: number;
  hasUserVote: boolean;
  onClear: () => void;
}

export const RatingFooter: FC<RatingFooterProps> = ({
  average,
  count,
  hasUserVote,
  onClear,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between text-xs text-gray-500 pt-2!">
      <div className="flex gap-2 items-center">
        <span className="font-semibold text-white text-lg">
          {average.toFixed(1)}
        </span>
        <span>
          {t('common.avg')} ({count} {t('common.votes')})
        </span>
      </div>

      {hasUserVote && (
        <button
          onClick={onClear}
          className="text-red-400 hover:text-red-600 flex items-center gap-1 transition-colors"
        >
          <Trash2 className="w-3 h-3" /> {t('common.clear')}
        </button>
      )}
    </div>
  );
};
