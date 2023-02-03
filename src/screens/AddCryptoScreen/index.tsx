import {Alert, Text, View} from 'react-native';
import {Container} from '../../components/cryptoList/style';
import {AddBut, AddCryp, AddText, TextCrypro, TitleAdd} from './style';
import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import {useLazyGetCryptoQuery} from '../../redux/api/crypto';
import {useEffect} from 'react';
import {add} from '../../redux/cryptoSlice';
import theme from '../../themes';

interface LaotrascreenProps {
  navigation: {
    navigate: (routeName: string) => void;
  };
  useFocused: {
    focused: boolean;
  };
}

const Laotrascreen = ({navigation}: LaotrascreenProps) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [getCrypto, {data}] = useLazyGetCryptoQuery();

  const [borderColor, setBorder] = useState(theme.colors.divider);

  useEffect(() => {
    if (data) {
      dispatch(add(data.data));
      navigation.navigate('crypto');
    }
  }, [data]);

  const handleAddCrypto = () => {
    if (!inputValue) {
      Alert.alert('Input is empty', 'Please enter a name or ticker symbol.');
      return;
    }
    getCrypto(inputValue);
  };

  return (
    <>
      <AddBut onPress={() => navigation.navigate('crypto')}>
        <Text>&lt; back to list</Text>
      </AddBut>

      <Container>
        <TitleAdd>
          <Text>Add a Cryptocurrency</Text>
        </TitleAdd>
      </Container>

      <View>
        <TextCrypro
          placeholder="Use a name or ticker symbol..."
          onChangeText={text => setInputValue(text)}
          onBlur={() => setBorder(theme.colors.divider)}
          onFocus={() => setBorder(theme.colors.yellow)}
          style={{borderColor}}
        />
      </View>

      <View>
        <AddCryp onPress={handleAddCrypto}>
          <AddText>Add</AddText>
        </AddCryp>
      </View>
    </>
  );
};

export default Laotrascreen;
