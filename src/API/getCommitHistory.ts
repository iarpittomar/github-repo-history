import { Octokit } from '@octokit/core';

export const getCommmitHistory = async (
  accessToken: string,
  repo?: string,
  owner?: string
) => {
  const octokit = new Octokit({
    auth: accessToken,
  });

  const response = await octokit.request(
    `GET /repos/${owner || 'iarpittomar'}/${
      repo || 'github-repo-history'
    }/commits`,
    {
      owner: owner || 'iarpittomar',
      repo: repo || 'github-repo-history',
    }
  );
  return response;
};
