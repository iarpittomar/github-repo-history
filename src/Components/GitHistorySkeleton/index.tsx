import React from 'react';
import { Stack, Skeleton } from '@chakra-ui/react';
import { IGitHistorySkeleton } from '../../interface/IGitHistorySkeleton';

const GitHistorySkeleton: React.FC<IGitHistorySkeleton> = ({ isLoaded }) => {
  return (
    <Stack padding={4} spacing={4} w='100%'>
      <Skeleton
        height='40px'
        w='100%'
        isLoaded={isLoaded}
        fadeDuration={4}
      ></Skeleton>
      <Skeleton
        height='40px'
        w='100%'
        isLoaded={isLoaded}
        fadeDuration={4}
      ></Skeleton>
      <Skeleton
        height='40px'
        w='100%'
        isLoaded={isLoaded}
        fadeDuration={4}
      ></Skeleton>
    </Stack>
  );
};

export default GitHistorySkeleton;
