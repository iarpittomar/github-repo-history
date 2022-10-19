import React from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { getCommmitHistory } from '../../API/getCommitHistory';
import GitHistorySkeleton from '../../Components/GitHistorySkeleton';
import InfoBlock from '../InfoBlock';

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

const GithubCommitHistory = () => {
  const [githubHistory, setGithubHistory] = React.useState<IGithubHistory[]>(
    []
  );
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchCommitHistory = () => {
    getCommmitHistory()
      .then((resp) => {
        setGithubHistory(resp.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    fetchCommitHistory();
  }, []);

  return (
    <React.Fragment>
      <InfoBlock />
      <VStack
        border='1px solid'
        borderColor='gray.200'
        borderRadius='0.4rem'
        p='2rem'
        justifyContent='center'
        alignItems='flex-start'
        spacing={8}
        mt='2rem'
      >
        {isLoading ? (
          <GitHistorySkeleton isLoaded={!isLoading} />
        ) : (
          githubHistory.map((item, index) => {
            return (
              <VStack
                key={item.commit.committer.date}
                w='100%'
                p='1rem'
                border='1px solid'
                borderColor='primary.100'
                borderRadius='0.4rem'
                alignItems='flex-start'
                boxShadow='2px 2px 5px rgba(0,0,0,0.4)'
              >
                <Text color='secondary.500' fontSize='1.6rem'>
                  {item.commit.message}
                </Text>
                <Text color='primary.500' fontSize='1.2rem'>
                  {new Date(item.commit.committer.date).toLocaleString()} by{' '}
                  {item.commit.committer.name}
                </Text>
              </VStack>
            );
          })
        )}
      </VStack>
    </React.Fragment>
  );
};

export default GithubCommitHistory;
