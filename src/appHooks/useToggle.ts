import {useState} from 'react';

export const useToggle = (value: boolean): [boolean, () => void] => {
  const [variable, setVariable] = useState<boolean>(value);
  const toggleIt = () => setVariable(!variable);
  return [variable, toggleIt];
};
