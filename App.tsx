import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/themes';
import Cryptos from './src/screens/Cryptos';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddCryptoScreen from './src/screens/AddCryptoScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="crypto"
          screenOptions={{
            headerShown: false,
          }}>
          <stack.Screen name="crypto" component={Cryptos} />
          <stack.Screen name="CryptoLoad" component={AddCryptoScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  </Provider>
);

export default App;
