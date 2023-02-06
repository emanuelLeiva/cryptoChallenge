import {ImageSourcePropType} from 'react-native';

export type InitialStateType = {
  cryptos: Crypto[];
  id?: string;
  State: string;
};

export type CryptoType = {
  crypto: Crypto[];
  symbol: string;
};

export type Crypto = {
  id: string;
  name: string;
  symbol: string;
  img: ImageSourcePropType;
  market_data: {
    price_usd: number;
    percent_change_usd_last_24_hours: number;
  };
};
