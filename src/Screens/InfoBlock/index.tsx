import { Button, HStack } from '@chakra-ui/react';
import React from 'react';
import InputBox from '../../Components/InputBox';
import { useGitHistoryContext } from '../../Context/GitHistoryContext';

const InfoBlock: React.FC = () => {
  const {
    setAccessToken,
    accessToken,
    fetchData,
    setOwner,
    setRepo,
    repo,
    owner,
    timer,
  } = useGitHistoryContext();

  const handleTokenChange = (e: any) => {
    setAccessToken(e.target.value);
  };

  const handleOwnerChange = (e: any) => {
    setOwner(e.target.value);
  };

  const handleRepoChange = (e: any) => {
    setRepo(e.target.value);
  };

  const handleFetchData = React.useCallback(() => {
    if (accessToken) {
      fetchData(accessToken, repo, owner);
    }
  }, [accessToken, repo, owner, fetchData]);

  return (
    <HStack spacing={8} alignItems='flex-end'>
      <InputBox
        label='Personal Access Token'
        value={accessToken || ''}
        handleChange={handleTokenChange}
      />
      <InputBox
        label='Owner'
        value={owner || ''}
        handleChange={handleOwnerChange}
      />
      <InputBox
        label='Repo'
        value={repo || ''}
        handleChange={handleRepoChange}
      />
      <Button size='md' variant='primary' onClick={handleFetchData}>
        Refresh Now
      </Button>
      <Button size='md' variant='solid' colorScheme='gray'>
        Reloading in {timer}s
      </Button>
    </HStack>
  );
};

export default InfoBlock;
