import { useEffect, useState } from "react";

import useDebounce from "@/hooks/useDebounce";

type Props = {
  handleSearchChange: (value: string) => void;
};

const SearchField = ({ handleSearchChange }: Props) => {
	const [value, setValue] = useState('')

	const debouncedValue = useDebounce(value, 500)

	useEffect(() => {
		handleSearchChange(debouncedValue)
	}, [debouncedValue, handleSearchChange])
	
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <input className='w-96 max-w-full py-2 px-4 rounded-lg' placeholder='Search jokes...' onChange={onChange} />;
};
export default SearchField;
