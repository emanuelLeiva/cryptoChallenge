import {Text} from 'react-native';
import React from 'react';
import {AddButton} from './style';

type ButtonProps = {
  text: string;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({text, onPress}) => (
  <AddButton onPress={onPress}>
    <Text>{text}</Text>
  </AddButton>
);

export default Button;
