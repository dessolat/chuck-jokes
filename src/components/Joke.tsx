import { type TJoke } from '@/types';

type Props = {
  joke: TJoke;
};

const Joke = ({ joke }: Props) => (
  <li
    key={joke.id}
    className='flex justify-between items-center space-x-5 shadow-lg border border-green-600 rounded bg-slate-200 [&>p]:p-3'>
    <p className='w-72 text-gray-600 text-center'>{joke.id}</p>
    <p className='flex-1 font-bold'>{joke.value}</p>
    <p className='w-72 italic text-center'>{joke.updated_at}</p>
  </li>
);

export default Joke;
