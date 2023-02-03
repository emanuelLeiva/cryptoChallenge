import {Text} from 'react-native';
import React from 'react';
import { AddButton } from './style';
const Button = ({ text, onPress }) => (
  <AddButton onPress={onPress}>
    <Text>{text}</Text>
  </AddButton>
);

export default Button;
