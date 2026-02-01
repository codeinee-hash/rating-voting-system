import { Button } from '@/shared/ui/button';
import { Edit, MessageSquare } from 'lucide-react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ReviewForm } from './review-form';

interface RatingUserReviewProps {
    reviewText?: string;
    reviewDate?: string;
    isEditingReview: boolean;
    onEditToggle: (isEditing: boolean) => void;
    onSubmit: (text: string) => void;
    isVoteRequired: boolean;
}

export const RatingUserReview: FC<RatingUserReviewProps> = ({
    reviewText,
    reviewDate,
    isEditingReview,
    onEditToggle,
    onSubmit,
    isVoteRequired,
}) => {
    const { t } = useTranslation();

    if (isEditingReview) {
        return (
            <div className="pt-4! border-t border-gray-500">
                <ReviewForm
                    initialText={reviewText || ''}
                    onSubmit={onSubmit}
                    onCancel={() => onEditToggle(false)}
                />
            </div>
        );
    }

    if (!reviewText) {
        return (
            <div className="pt-4! border-t border-gray-500">
                <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => onEditToggle(true)}
                    disabled={isVoteRequired}
                >
                    <MessageSquare className="w-4 h-4 mr-2!" />
                    {t('rating.addReview')}
                </Button>
            </div>
        );
    }

    return (
        <div className="pt-4! border-t border-gray-500">
            <div className="bg-white/5 backdrop-blur-sm p-4! rounded-lg relative group">
                <p className="text-sm text-white italic">"{reviewText}"</p>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                    <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => onEditToggle(true)}
                    >
                        <Edit className="w-4 h-4" />
                    </Button>
                </div>
                {reviewDate && (
                    <div className="mt-2! text-xs text-gray-400">
                        {new Date(reviewDate).toLocaleDateString()}
                    </div>
                )}
            </div>
        </div>
    );
};
