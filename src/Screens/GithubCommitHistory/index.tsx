import React from 'react';
import {
  VStack,
  Text,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import GitHistorySkeleton from '../../Components/GitHistorySkeleton';
import InfoBlock from '../InfoBlock';
import { useGitHistoryContext } from '../../Context/GitHistoryContext';
import { formateDate } from '../../utils/dateFormatter';

const GithubCommitHistory = () => {
  const { isLoading, githubHistory, accessToken } = useGitHistoryContext();

  return (
    <React.Fragment>
      <InfoBlock />
      <Alert status='info' mt='2rem'>
        <AlertIcon />
        By default, We are showning the data for this project itself. If you
        want to get data for your repos, please enter the details above.
      </Alert>
      {accessToken ? (
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
                    {formateDate(item.commit.committer.date)} by{' '}
                    {item.commit.committer.name}
                  </Text>
                </VStack>
              );
            })
          )}
        </Box>
      ) : (
        <Alert
          status='error'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
          mt='2rem'
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Access token not found!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Kindly enter your access token above and then click on refresh now
            button.
          </AlertDescription>
        </Alert>
      )}
    </React.Fragment>
  );
};

export default GithubCommitHistory;
