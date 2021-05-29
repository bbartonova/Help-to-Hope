import { createContext, useState } from 'react';
import { useLocalStorageState } from 'ahooks';

export const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
  //const [nameProject, setNameProject] = useState('');
  const [nameProjectLS, setNameProjectLS] = useLocalStorageState(
    'name-project',
    '',
  );

  const appValue = {
    //nameProject,
    //setNameProject,
    nameProjectLS,
    setNameProjectLS,
  };

  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
};
