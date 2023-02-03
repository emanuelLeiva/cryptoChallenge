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
import 'react-native-gesture-handler';

const stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <stack.Navigator initialRouteName="crypto">
            <stack.Screen
              name="crypto"
              component={Cryptos}
              options={{
                headerShown: false,
              }}
            />
            <stack.Screen
              name="Laotrascreen"
              component={AddCryptoScreen}
              options={{
                headerShown: false,
              }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  </Provider>
);

export default App;
