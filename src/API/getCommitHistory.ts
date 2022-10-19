import { Octokit } from '@octokit/core';

export const getCommmitHistory = async () => {
  const octokit = new Octokit({
    auth: '',
  });

  console.log(octokit);

  const response = await octokit.request(
    'GET /repos/iarpittomar/github-repo-history/commits',
    {
      owner: 'iarpittomar',
      repo: 'github-repo-history',
    }
  );
  return response;
};
