import React from 'react';
import { getCommmitHistory } from '../API/getCommitHistory';
import {
  IGitHistoryContext,
  IGithubHistory,
} from '../interface/IGitHistoryContext';

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
  const [owner, setOwner] = React.useState('');
  const [repo, setRepo] = React.useState('');

  const [timer, setTimer] = React.useState(30);

  const fetchData = React.useCallback(
    (accessToken?: string, repo?: string, owner?: string) => {
      setIsLoading(true);
      if (accessToken) {
        window.localStorage.setItem('personalAccessToken', accessToken);
        getCommmitHistory(accessToken, repo, owner)
          .then((resp) => {
            setGithubHistory(resp.data);
            setIsLoading(false);
            setTimer(30);
          })
          .catch((err) => {});
      }
    },
    []
  );

  React.useEffect(() => {
    let timerInterval: any;
    if (accessToken) {
      timerInterval = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          fetchData(accessToken, repo, owner);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [accessToken, fetchData, owner, repo, timer]);

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
        timer,
        owner,
        repo,
        setOwner,
        setRepo,
      }}
    >
      {props.children}
    </GitHistoryContext.Provider>
  );
};

export { GitHistoryProvider, useGitHistoryContext };
