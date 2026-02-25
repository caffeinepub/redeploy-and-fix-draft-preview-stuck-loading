import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import Portfolio from '@/pages/Portfolio';
import DataInitializer from '@/components/DataInitializer';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <DataInitializer />
      <Portfolio />
      <Toaster />
    </ThemeProvider>
  );
}
