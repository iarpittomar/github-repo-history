import { Box } from '@chakra-ui/react';
import React from 'react';
import { GitHistoryProvider } from './Context/GitHistoryContext';
import GithubCommitHistory from './Screens/GithubCommitHistory';

const App: React.FC = () => {
  return (
    <GitHistoryProvider>
      <Box
        h='100vh'
        w='100vw'
        p={['2rem', '2rem', '4rem 8rem', '6rem 12rem', '12rem 24rem']}
      >
        <GithubCommitHistory />
      </Box>
    </GitHistoryProvider>
  );
};

export default App;
