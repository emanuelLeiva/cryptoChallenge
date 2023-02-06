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
/*
 */
