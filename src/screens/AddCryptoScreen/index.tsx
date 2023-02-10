import {Alert, KeyboardAvoidingView, Text, View} from 'react-native';
import {
  ContDuo,
  OverallCont,
  BackText,
  InputBox,
  AddButton,
  BackButton,
  TitleAdd,
  AddText,
} from './style';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState} from 'react';
import {useLazyGetCryptoQuery} from '../../redux/api/crypto';
import {useEffect} from 'react';
import {add} from '../../redux/cryptoSlice';
import theme from '../../themes';
import {RootState} from '../../redux/store';

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
  const [getCrypto, {data, error}] = useLazyGetCryptoQuery();
  const [borderColor, setBorder] = useState(theme.colors.divider);
  const crypto = useSelector(({crypto}: RootState) => crypto);

  useEffect(() => {
    if (data) {
      dispatch(add(data.data));
      navigation.navigate('crypto');
    }
    if (error?.status === 404) {
      Alert.alert('No result found');
    }
  }, [data, error]);

  const handleAddCrypto = () => {
    if (!inputValue) {
      Alert.alert('Input is empty', 'Please enter a name or ticker symbol.');
      return;
    }

    const repeatedCrypto = crypto.cryptos?.find(
      (c: {name: string; symbol: string}) =>
        c.name.toLowerCase() === inputValue.toLowerCase() ||
        c.symbol.toLowerCase() === inputValue.toLowerCase(),
    );
    if (repeatedCrypto) {
      Alert.alert(
        `The crypto ${repeatedCrypto.name} (${repeatedCrypto.symbol}) has already been added.`,
      );
      return;
    }
    getCrypto(inputValue);
  };

  return (
    <>
      <KeyboardAvoidingView behavior="height">
        <BackButton onPress={() => navigation.navigate('crypto')}>
          <BackText>&lt; Back to list</BackText>
        </BackButton>

        <OverallCont>
          <TitleAdd>
            <Text>Add a Cryptocurrency</Text>
          </TitleAdd>

          <ContDuo>
            <View>
              <InputBox
                placeholder="Use a name or ticker symbol..."
                onChangeText={setInputValue}
                onBlur={() => setBorder(theme.colors.divider)}
                onFocus={() => setBorder(theme.colors.yellow)}
                style={{borderColor}}
              />
            </View>

            <View>
              <AddButton onPress={handleAddCrypto}>
                <AddText>Add</AddText>
              </AddButton>
            </View>
          </ContDuo>
        </OverallCont>
      </KeyboardAvoidingView>
    </>
  );
};
export default CryptoLoad;
