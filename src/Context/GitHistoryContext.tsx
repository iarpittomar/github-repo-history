import React from 'react';

interface IGitHistoryContext {
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  accessToken: string;
}

const GitHistoryContext = React.createContext<IGitHistoryContext | null>(null);

const useGitHistoryContext = () => {
  const context = React.useContext(GitHistoryContext);
  if (!context) {
    throw new Error(
      'useGitHistoryContext must be used within GitHistoryProvider'
    );
  }
  return context;
};

const GitHistoryProvider = ({ ...props }) => {
  const [accessToken, setAccessToken] = React.useState('');

  return (
    <GitHistoryContext.Provider
      value={{ setAccessToken, accessToken }}
    ></GitHistoryContext.Provider>
  );
};

export { GitHistoryProvider, useGitHistoryContext };
