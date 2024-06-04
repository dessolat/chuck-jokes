import { Inter } from 'next/font/google';

import useJokes from '@/hooks/useJokes';

import SearchField from '@/components/SearchField';
import JokesList from '@/components/JokesList';

const inter = Inter({ subsets: ['latin'] });

export default function Jokes() {
  const { jokesData, isLoading, error, handleSearchChange } = useJokes();

  return (
    <main
      className={`${inter.className} container mx-auto flex min-h-screen flex-col items-center p-5 space-y-8`}>
      <SearchField handleSearchChange={handleSearchChange} />
      <JokesList jokesData={jokesData} isLoading={isLoading} error={error} />
    </main>
  );
}
