import { Text, Input, VStack } from '@chakra-ui/react';
import React from 'react';

interface IInputBox {
  label: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputBox: React.FC<IInputBox> = ({ label, value, handleChange }) => {
  return (
    <React.Fragment>
      <VStack alignItems='flex-start' w='25rem'>
        <Text>{label}</Text>
        <Input
          value={value}
          onChange={handleChange}
          placeholder={`Enter your ${label}`}
        />
      </VStack>
    </React.Fragment>
  );
};

export default InputBox;
