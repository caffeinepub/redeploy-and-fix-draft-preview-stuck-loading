import { useQuery } from '@tanstack/react-query';
import type { Portfolio } from '@/types/portfolio';
import { portfolioData } from '@/data/portfolioData';

// Since backend no longer supports portfolio functionality,
// we return static data from local storage
export function usePortfolioContent() {
  return useQuery<Portfolio>({
    queryKey: ['portfolioContent'],
    queryFn: async () => {
      // Minimal delay for smooth UX
      await new Promise(resolve => setTimeout(resolve, 100));
      return portfolioData;
    },
    staleTime: Infinity, // Static data never goes stale
  });
}

// Contact form submission is no longer supported by backend
// This is a placeholder that simulates success
export function useSubmitContactForm() {
  return {
    mutateAsync: async (data: { name: string; email: string; message: string }) => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      console.log('Contact form submission (simulated):', data);
      return Promise.resolve();
    },
    isPending: false,
  };
}
