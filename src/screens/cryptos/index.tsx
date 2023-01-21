import React from 'react';
import {View, FlatList} from 'react-native';
import Cryptoitems from '../../components/cryptoList/';
import Header from '../../components/header';
import Button from '../add/index';
import {ButtonAdd} from './style';
const crypto = [
  {
    Name: 'Bitcoin',
    id: '1',
    symbol: 'BCT',
    img: require('../../assets/BitLog.png'),
    market_data: {
      price_usd: 7.21568,
      percent_change_usd_last_24_hours: 1.82,
    },
  },
  {
    Name: 'Ethereum',
    id: '2',
    symbol: 'ETH',
    img: require('../../assets/ether.png'),
    market_data: {
      price_usd: 146.86,
      percent_change_usd_last_24_hours: 1.46,
    },
  },
  {
    Name: 'XRP',
    id: '3',
    symbol: 'XRP',
    img: require('../../assets/xrp-logo.png'),
    market_data: {
      price_usd: 0.220568,
      percent_change_usd_last_24_hours: -2.47,
    },
  },
];

const List = () => {
  return (
    <View>
      <View>
        <Header />
        <FlatList
          data={crypto}
          keyExtractor={({id}) => id}
          renderItem={({item}) => <Cryptoitems item={item} />}
        />
      </View>
      <ButtonAdd>
        <Button />
      </ButtonAdd>
    </View>
  );
};

export default List;
