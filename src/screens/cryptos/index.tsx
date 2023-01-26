import React from 'react';
import {View, FlatList} from 'react-native';
import Cryptoitems from '../../components/CryptoList';
import Header from '../../components/Header';
import Button from '../Add/index';
import { AddButton } from './style';
const crypto = [
  {
    name: 'Bitcoin',
    id: '1',
    symbol: 'BCT',
    img: require('../../assets/BitLog.png'),
    market_data: {
      price_usd: 7.21568,
      percentusd: 1.82,
    },
  },
  {
    name: 'Ethereum',
    
    id: '2',
    symbol: 'ETH',
    img: require('../../assets/ether.png'),
    market_data: {
      price_usd: 146.86,
      percentusd: 1.46,
    },
  },
  {
    name: 'XRP',
    id: '3',
    symbol: 'XRP',
    img: require('../../assets/xrp-logo.png'),
    market_data: {
      price_usd: 0.220568,
      percentusd: -2.47,
    },
  },
];

const List = () => (
    <View>
      <View>
        <Header />
        <FlatList
          data={crypto}
          keyExtractor={({id}) => id}
          renderItem={({item}) => <Cryptoitems item={item} />}
        />
      </View>
      <AddButton>
        <Button />
      </AddButton>
    </View>
  );
;

export default List;
