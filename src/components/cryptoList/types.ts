import {ImageSourcePropType, Text} from 'react-native';

export type StyleTypes = {
  isUp?: boolean;
};

export type CryptoitemsProps = {
  item: Crypto;
};

export type Crypto = {
  data: string;
  id: string;
  name: string;
  symbol: string;
  img: ImageSourcePropType;
  market_data: {
    price_usd: number;
    percent_change_usd_last_24_hours: number;
  };
};

export type cryptoTypes = {
  state: string;
};
