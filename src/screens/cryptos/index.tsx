import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Cryptoitems from '../../components/cryptoList';
import Header from '../../components/header';
import Button from '../../components/AddCrypto';
import {AddButton} from './style';
import axios from 'axios';
import {Crypto} from '../../components/cryptoList/types';
import {API_URL} from '@env';
const cryptoslogo = ['btc', 'eth', 'xrp', 'ada'];

function List() {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);

  useEffect(() => {
    setCryptos([]);
    const getCryptos = async (coin: string) => {
      const URL = `${API_URL}${coin}/metrics#`;
      console.log('API_URL', API_URL);
      const cryptos = await axios.get(URL);
      setCryptos(prev => [...prev, cryptos.data.data]);
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
