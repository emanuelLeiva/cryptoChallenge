import styled from 'styled-components/native';
import theme from '../../themes';
import {StyleTypes} from './types';

export const Container = styled.View`
  margin-top: 30px;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NameContainer = styled.View`
  flex-direction: column;
  position: absolute;
  padding-left: 68px;
  margin-bottom: 15px;
`;

export const NameCryp = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.name};
`;

export const NameSym = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.symb};
`;

export const LogoContainer = styled.View`
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
  margin-bottom: 2px;
`;

export const Logo = styled.Image`
  width: 48px;
  height: 48px;
  align-items: flex-start;
  margin-top: 1px;
  margin-bottom: 1px;
`;

export const PriceContainer = styled.View`
  padding-right: 10px;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-right: 5px;
  margin-top: 3px;
  color: ${({theme}) => theme.colors.name};
`;

export const Percentage = styled.Text<StyleTypes>`
  color: ${({isUp}) => (isUp ? theme.colors.priceD : theme.colors.priceUp)};
  font-size: 14px;
  margin-right: 3px;
`;

export const PreArrow = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const ArrowD = styled.Image`
  display: flex;
  text-align: center;
  width: 15px;
  height: 15px;
  margin-top: 3px;
  color: ${({theme}) => theme.colors.priceD};
`;

export const ArrowU = styled.Image`
  display: flex;
  text-align: center;
  width: 15px;
  height: 15px;
  margin-top: 3px;
  color: ${({theme}) => theme.colors.priceUp};
`;

export const Separator = styled.View`
  border-width: 0.6px;
  border-bottom-color: ${({theme}) => theme.colors.separator};
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  opacity: 0.2;
  width: 90%;
`;
