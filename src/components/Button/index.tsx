import {Text} from 'react-native';
import React from 'react';
import {AddButton} from './style';

type ButtonProps = {
  text: string;
  onPress: () => void;
};

const Button=({text, onPress}:ButtonProps) => (
  <AddButton onPress={onPress}>
    <Text>{text}</Text>
  </AddButton>
);

export default Button;
