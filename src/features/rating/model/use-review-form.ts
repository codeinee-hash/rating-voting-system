import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

const createSchema = (t: (key: string) => string) =>
  z.string().max(200, t('rating.maxChars'));

export const useReviewForm = (
  initialText: string,
  onSubmit: (text: string) => void
) => {
  const { t } = useTranslation();
  const [text, setText] = useState(initialText);
  const [error, setError] = useState<string | undefined>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const reviewSchema = createSchema(t).trim().min(1, t('rating.required'));
    const result = reviewSchema.safeParse(text);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    onSubmit(text);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (error) setError(undefined);
  };

  return {
    text,
    error,
    handleSubmit,
    handleChange,
    isOverLimit: text.length > 200,
  };
};
