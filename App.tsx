import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/themes';
import Header from './src/components/header';
import crypto from './src/screens/cryptos/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import addCrypto from './src/screens/add/index';

const stack = createStackNavigator();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <stack.Navigator initialRouteName="crypto">
            <stack.Screen
              name="crypto"
              component={crypto}
              options={{
                headerShown: false,
              }}
            />
            <stack.Screen name="addCrypto" component={addCrypto} />
          </stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
