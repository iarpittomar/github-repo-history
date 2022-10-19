import { HStack } from '@chakra-ui/react';
import React from 'react';
import InputBox from '../../Components/InputBox';

const InfoBlock: React.FC = () => {
  return (
    <HStack>
      <InputBox
        label='Personal Access Token'
        value=''
        handleChange={() => ''}
      />
    </HStack>
  );
};

export default InfoBlock;
