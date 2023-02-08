import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Cryptoitems from '../../components/cryptoList';
import Header from '../../components/header';
import Button from '../../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import {
  useLazyGetCryptoQuery,
  useLazyGetCryptosQuery,
} from '../../redux/api/crypto';
import {add, update} from '../../redux/cryptoSlice';
import {InitialStateType} from '../../redux/types';

interface ListProps {
  navigation: {
    navigate: (routeName: string) => void;
  };
}

function List({navigation}: ListProps) {
  const [getCryptos, {data}] = useLazyGetCryptosQuery();
  const dispatch = useDispatch();
  const cryptos = useSelector(
    (state: {crypto: InitialStateType}) => state.crypto.cryptos,
  );

  useEffect(() => {
    if (data) {
      dispatch(update(data));
    }
  }, [data]);

  const updateCryptos = () => 
    getCryptos(cryptos.map(({symbol}: {symbol: string}) => symbol));
  

  useEffect(() => {
    const intervalCryptos = setInterval(() => updateCryptos(), 3000);
    return () => {
      clearInterval(intervalCryptos);
    };
  }, [cryptos]);

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
      <Button
        text="+ Add a Cryptocurrency"
        onPress={() => navigation.navigate('CryptoLoad')}
      />
    </View>
  );
}

export default List;
