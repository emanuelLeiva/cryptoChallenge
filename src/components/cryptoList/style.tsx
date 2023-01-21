import styled from 'styled-components/native';
import theme from '../../themes';
import {StyleTypes} from './types';

export const Container = styled.View`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NameContainer = styled.View`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding-left: 80px;
`;

export const NameCryp = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.name};
`;

export const NameSym = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.symb};
`;

export const LogoContainer = styled.View`
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
`;

export const Logo = styled.Image`
  width: 48px;
  height: 48px;
  align-items: flex-start;
`;

export const PriceContainer = styled.View`
  padding-right: 10px;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.name};
`;

export const Percentage = styled.Text<StyleTypes>`
  color: ${({isUp}) => (isUp ? theme.colors.priceD : theme.colors.priceUp)};
  font-weight: 400;
  font-size: 14px;
`;

export const PreArrow = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const ArrowD = styled.Image`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  width: 15px;
  height: 15px;
`;

export const ArrowU = styled.Image`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  width: 15px;
  height: 15px;
`;

export const Separator = styled.View`
  border-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.separator};
  margin-top: 19px;
  opacity: 0.2;
`;
