import { Button } from '@/shared/ui/button';
import { Textarea } from '@/shared/ui/textarea';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useReviewForm } from '../model/use-review-form';

interface ReviewFormProps {
  initialText?: string;
  onSubmit: (text: string) => void;
  onCancel: () => void;
}

export const ReviewForm: FC<ReviewFormProps> = ({
  initialText = '',
  onSubmit,
  onCancel,
}) => {
  const { t } = useTranslation();
  const { text, error, handleSubmit, handleChange, isOverLimit } =
    useReviewForm(initialText, onSubmit);

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3! animate-in fade-in duration-300"
    >
      <Textarea
        placeholder={t('rating.placeholder')}
        value={text}
        onChange={handleChange}
        error={error}
        rows={3}
      />
      <div className="flex items-center justify-between">
        <span
          className={`text-xs ${isOverLimit ? 'text-red-500' : 'text-gray-400'}`}
        >
          {t('rating.count', { count: text.length })}
        </span>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={onCancel}
          >
            {t('common.cancel')}
          </Button>
          <Button type="submit" size="sm" disabled={isOverLimit}>
            {t('common.submit')}
          </Button>
        </div>
      </div>
    </form>
  );
};
