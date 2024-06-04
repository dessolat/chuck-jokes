import { useCallback, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import jokesService from '@/services/jokes.service';

const useJokes = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const {
    data: jokesData,
    isLoading,
    error
  } = useQuery({
    queryKey: ['jokes', searchValue],
    queryFn: () => jokesService.getJokes(searchValue),
    enabled: searchValue.length > 3,
    refetchOnWindowFocus: false,
    staleTime: Infinity
  });

  return { jokesData, isLoading, error, handleSearchChange };
};
export default useJokes;
