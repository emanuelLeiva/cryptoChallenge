import styled from 'styled-components/native';
import theme from '../../themes';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
export const Container = styled(View)``;

export const AddBut = styled(Text)`
  padding-top: 16px;
  margin-left: 24px;
`;
export const BackBot = styled(Text)`
  margin-top: 14px;
  font-size: 16px;

  color: ${theme.colors.main};
`;
export const TitleAdd = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  height: 35px;
  margin-left: 15px;
  color: ${theme.colors.name};
`;
export const ContDuo = styled(View)`
  margin-left: 25px;
  margin-right: 25px;
  display: flex;
`;
export const ContThird = styled(Container)`
  margin-top: 40%;
`;

export const TextCrypro = styled(TextInput)`
  border-width: 1px;
  padding: 13px;
  margin-top: 24px;
  border-color: ${theme.colors.divider};
  background-color: ${theme.colors.separator};
`;
export const AddCryp = styled(TouchableOpacity)`
  display: flex;
  margin-top: 16px;
  margin-left: 57%;
  padding: 13px;
  border-radius: 4px;
  background-color: ${theme.colors.yellow};
  align-items: center;
`;

export const AddText = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.main};
`;
