import { Header } from '@/features/header/ui/header';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
