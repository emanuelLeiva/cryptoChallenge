import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/themes';
import crypto from './src/screens/Cryptos';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import addCrypto from './src/screens/Add';

const stack = createStackNavigator();

const App = () => (
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

export default App;
