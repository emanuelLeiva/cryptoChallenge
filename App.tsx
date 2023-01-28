import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/themes';
import Cryptos from './src/screens/Cryptos';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const stack = createStackNavigator();

const App = () => (
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
        </stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  </>
);

export default App;
