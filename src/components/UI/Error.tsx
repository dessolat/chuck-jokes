type Props = {
  message: string;
};

const Error = ({ message }: Props) => {
  return <p className="text-red-600">{message}</p>;
};
export default Error;
