import styled from 'styled-components/native';
import theme from '../../themes';
import {Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export const AddBut = styled(Text)`
  font-size: 16px;
  margin-top: 60px;
  margin-left: 24px;
  color: ${theme.colors.main};
`;
export const TitleAdd = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  height: 35px;
  margin-top: 45%;
  margin-left: 15px;
  color: ${theme.colors.name};
`;
export const TextCrypro = styled(TextInput)`
  border-width: 1px;
  padding: 13px;
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
  border-color: ${theme.colors.divider};
  background-color: ${theme.colors.separator};
`;
export const AddCryp = styled(TouchableOpacity)`
  position: absolute;
  margin-left: 51%;
  margin-top: 16px;
  padding: 13px;
  border-radius: 4px;
  background-color: ${theme.colors.yellow};
  height: 48px;
  width: 155px;
  align-items: center;
`;

export const AddText = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.main};
`;
