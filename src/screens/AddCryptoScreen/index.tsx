import {Alert, KeyboardAvoidingView, Text, View} from 'react-native';
import {Container} from '../../components/cryptoList/style';
import {
  AddBut,
  AddCryp,
  AddText,
  TextCrypro,
  TitleAdd,
  ContDuo,
  ContThird,
  BackBot,
} from './style';
import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import {useLazyGetCryptoQuery} from '../../redux/api/crypto';
import {useEffect} from 'react';
import {add} from '../../redux/cryptoSlice';
import theme from '../../themes';

interface cryptoLoadProps {
  navigation: {
    navigate: (routeName: string) => void;
  };
  useFocused: {
    focused: boolean;
  };
}

const CryptoLoad = ({navigation}: cryptoLoadProps) => {
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
      <KeyboardAvoidingView behavior="height">
        <AddBut onPress={() => navigation.navigate('crypto')}>
          <BackBot>&lt; Back to list</BackBot>
        </AddBut>

        <ContThird>
          <Container>
            <TitleAdd>
              <Text>Add a Cryptocurrency</Text>
            </TitleAdd>
          </Container>

          <ContDuo>
            <View>
              <TextCrypro
                placeholder="Use a name or ticker symbol..."
                onChangeText={setInputValue}
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
          </ContDuo>
        </ContThird>
      </KeyboardAvoidingView>
    </>
  );
};
export default CryptoLoad;
/*
 */
