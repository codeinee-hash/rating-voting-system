import { Header } from '@/features/header/ui/header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Toaster richColors position="top-right" theme="dark" />
    </div>
  );
}
