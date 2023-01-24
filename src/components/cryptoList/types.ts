import { ImageSourcePropType } from "react-native";


export type StyleTypes = {
    isUp?: boolean;
  }

  export type CryptoitemsProps = {
    item: {
      name: string,
      symbol: string,
      img: ImageSourcePropType,
      market_data: {
        price_usd: number,
        percentusd: number,
      },
    }
  } 