import React from 'react';
import { VStack, Text, Box, Alert, AlertIcon } from '@chakra-ui/react';
import GitHistorySkeleton from '../../Components/GitHistorySkeleton';
import InfoBlock from '../InfoBlock';
import { useGitHistoryContext } from '../../Context/GitHistoryContext';

const GithubCommitHistory = () => {
  const { isLoading, githubHistory } = useGitHistoryContext();

  return (
    <React.Fragment>
      <InfoBlock />
      <Alert status='info' mt='2rem'>
        <AlertIcon />
        By default, We are showning the data for this project itself. If you
        want to get data for your repos, please enter the details above.
      </Alert>
      <Box
        border='1px solid'
        borderColor='gray.200'
        borderRadius='0.4rem'
        p='2rem'
        mt='1rem'
        h='70vh'
        overflow='scroll'
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
                mb='2rem'
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
      </Box>
    </React.Fragment>
  );
};

export default GithubCommitHistory;
