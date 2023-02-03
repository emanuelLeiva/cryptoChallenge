import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import Cryptoitems from '../../components/cryptoList';
import Header from '../../components/header';
import Button from '../../components/AddCrypto';
import {useSelector} from 'react-redux';

interface ListProps {
  navigation: {
    navigate: (routeName: string) => void;
  };
}

function List({navigation}: ListProps) {
  const cryptos = useSelector(state => state.crypto.cryptos);

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
        onPress={() => navigation.navigate('Laotrascreen')}
      />
    </View>
  );
}

export default List;
