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
import ArrowDown from '../../assets/arrowdown.png';

const Cryptoitems = ({item}: any) => {
  const {Name, symbol, img, market_data} = item;

  return (
    <>
      <Container>
        <LogoContainer>
          <Logo source={img} />
        </LogoContainer>

        <NameContainer>
          <NameCryp>{Name}</NameCryp>
          <NameSym>{symbol}</NameSym>
        </NameContainer>

        <PriceContainer>
          <Price>${market_data.price_usd}</Price>
          <PreArrow>
            <ArrowD
              source={
                market_data.percent_change_usd_last_24_hours > 0
                  ? ArrowUp
                  : ArrowDown
              }
            />
            <Percentage isUp={market_data.percent_change_usd_last_24_hours < 0}>
              {market_data.percent_change_usd_last_24_hours}{' '}
            </Percentage>
          </PreArrow>
        </PriceContainer>
      </Container>
      <Separator />
    </>
  );
};

export default Cryptoitems;
