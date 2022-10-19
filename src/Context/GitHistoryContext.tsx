import React from 'react';
import { getCommmitHistory } from '../API/getCommitHistory';

interface IGithubHistory {
  commit: {
    message: string;
    committer: {
      email: string;
      name: string;
      date: string;
    };
  };
}
interface IGitHistoryContext {
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  accessToken: string;
  fetchData: (accessToken: string, repo?: string, owner?: string) => void;
  isLoading: boolean;
  githubHistory: IGithubHistory[];
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
  const [accessToken, setAccessToken] = React.useState(
    window.localStorage.getItem('personalAccessToken') || ''
  );
  const [githubHistory, setGithubHistory] = React.useState<IGithubHistory[]>(
    []
  );

  const [isLoading, setIsLoading] = React.useState(true);

  const fetchData = React.useCallback(
    (accessToken?: string, repo?: string, owner?: string) => {
      if (accessToken) {
        window.localStorage.setItem('personalAccessToken', accessToken);
        getCommmitHistory(accessToken, repo, owner)
          .then((resp) => {
            setGithubHistory(resp.data);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    []
  );

  React.useEffect(() => {
    fetchData(accessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GitHistoryContext.Provider
      value={{
        setAccessToken,
        accessToken,
        fetchData,
        isLoading,
        githubHistory,
      }}
    >
      {props.children}
    </GitHistoryContext.Provider>
  );
};

export { GitHistoryProvider, useGitHistoryContext };
