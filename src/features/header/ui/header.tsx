import { ROUTES } from '@/shared/consts/routes';
import { Button } from '@/shared/ui/button';
import { Film } from 'lucide-react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="container mx-auto! px-4! h-16 flex items-center justify-between">
        <Link
          to={ROUTES.home}
          className="flex items-center gap-2 font-bold text-xl text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <Film className="w-6 h-6" />
          <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {t('header.title')}
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Button
            variant={i18n.resolvedLanguage === 'en' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => changeLanguage('en')}
            className="w-10 px-0"
          >
            EN
          </Button>
          <div className="w-px h-4 bg-gray-400 mx-1!" />
          <Button
            variant={i18n.resolvedLanguage === 'ru' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => changeLanguage('ru')}
            className="w-10 px-0!"
          >
            RU
          </Button>
        </div>
      </div>
    </header>
  );
};
