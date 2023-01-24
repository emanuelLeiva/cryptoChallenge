import React from 'react';
import {
  Container,
  NameContainer,
  NameCryp,
  NameSym,
  LogoContainer,
  Logo,
  PriceContainer,
  Price,
  Percentage,
  PreArrow,
  ArrowD,
  Separator,
} from './style';
import ArrowUp from '../../assets/arrowup.png';
import ArrowDown from '../../assets/arrowd.png';
import { CryptoitemsProps } from './types';

const Cryptoitems = 
({item: {name, symbol, img, market_data}}: CryptoitemsProps ) =>
  <>
    <Container>
      <LogoContainer>
        <Logo source={img} />
      </LogoContainer>

      <NameContainer>
        <NameCryp>{name}</NameCryp>
        <NameSym>{symbol}</NameSym>
      </NameContainer>

      <PriceContainer>
        <Price>${market_data.price_usd}</Price>
        <PreArrow>
          <ArrowD
            source={market_data.percentusd > 0
              ? ArrowUp
              : ArrowDown} />
          <Percentage isUp={market_data.percentusd < 0}>
            {market_data.percentusd}%{' '}
          </Percentage>
        </PreArrow>
      </PriceContainer>
    </Container>
    <Separator />
  </>

;

export default Cryptoitems;
