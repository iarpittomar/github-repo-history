export interface IGithubHistory {
  commit: {
    message: string;
    committer: {
      email: string;
      name: string;
      date: string;
    };
  };
}

export interface IGitHistoryContext {
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  accessToken: string;
  fetchData: (accessToken: string, repo?: string, owner?: string) => void;
  isLoading: boolean;
  githubHistory: IGithubHistory[];
  timer: number;
  owner: string;
  repo: string;
  setOwner: React.Dispatch<React.SetStateAction<string>>;
  setRepo: React.Dispatch<React.SetStateAction<string>>;
}
