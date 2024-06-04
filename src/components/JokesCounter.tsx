type Props = {
  count: number;
};

const JokesCounter = ({ count }: Props) => {
  return <p className="text-sm">Total count: {count}</p>;
};

export default JokesCounter;
