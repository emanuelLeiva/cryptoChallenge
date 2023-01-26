import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Cryptoitems from '../../components/cryptoList';
import Header from '../../components/header';
import Button from '../add/index';
import {AddButton} from './style';
import axios from 'axios';
import {Crypto} from '../../components/cryptoList/types';

const cryptoslogo = ['btc', 'eth', 'xrp', 'ada'];

function List() {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);

  useEffect(() => {
    setCryptos([]);
    const getCryptos = async (coin: string) => {
      const URL = `https://data.messari.io/api/v1/assets/${coin}/metrics#`;
      const cryptos = await axios.get(URL);
      console.log('Cryptos', cryptos.data.data);
      setCryptos(prev => [...prev, cryptos.data.data]);
      console.log(cryptos);
    };
    cryptoslogo.forEach(cryptos => getCryptos(cryptos));
  }, []);
  return (
    <View>
      <View>
        <Header />
        <FlatList
          data={cryptos}
          keyExtractor={({id}) => id}
          renderItem={({item}) => <Cryptoitems item={item} />}
        />
      </View>
      <AddButton>
        <Button />
      </AddButton>
    </View>
  );
}

export default List;
