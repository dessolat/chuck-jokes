import { type TJokesData } from '@/types';

import Loader from './UI/Loader';
import Error from './UI/Error';
import JokesCounter from './JokesCounter';
import Joke from './Joke';

type Props = {
  jokesData: TJokesData | undefined;
  isLoading: boolean;
  error: Error | null;
};

const JokesList = ({ jokesData, isLoading, error }: Props) => {
  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} />;

  if (!jokesData || jokesData.total === 0) return <p>No jokes here.</p>;

  return (
    <>
      <JokesCounter count={jokesData.total} />
      <ul className='space-y-5 self-stretch'>
        {jokesData.result.map(joke => (
          <Joke joke={joke} />
        ))}
      </ul>
    </>
  );
};
export default JokesList;
