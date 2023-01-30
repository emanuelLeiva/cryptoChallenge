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
import {CryptoitemsProps} from './types';

const Cryptoitems = ({
  item: {id, name, symbol, market_data},
}: CryptoitemsProps) => (
  <>
    <Container>
      <LogoContainer>
        <Logo source={{uri: `https://messari.io/asset-images/${id}/128.png`}} />
      </LogoContainer>

      <NameContainer>
        <NameCryp>{name}</NameCryp>
        <NameSym>{symbol}</NameSym>
      </NameContainer>

      <PriceContainer>
        <Price>${market_data.price_usd.toFixed(2)}</Price>
        <PreArrow>
          <ArrowD
            source={
              market_data.percent_change_usd_last_24_hours > 0
                ? ArrowUp
                : ArrowDown
            }
          />
          <Percentage isUp={market_data.percent_change_usd_last_24_hours < 0}>
            {market_data.percent_change_usd_last_24_hours.toFixed(2)}%{' '}
          </Percentage>
        </PreArrow>
      </PriceContainer>
    </Container>
    <Separator />
  </>
);

export default Cryptoitems;
