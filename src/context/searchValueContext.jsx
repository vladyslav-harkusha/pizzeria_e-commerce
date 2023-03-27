import { createContext, useState } from 'react';

export const SearchValueContext = createContext('');

export const SearchValueContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchValueContext.Provider>
  );
};