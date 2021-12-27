/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomStack from './src/stack/BottomStack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

const Stack = createStackNavigator();
function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BottomStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="BottomStack"
        component={BottomStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

//Add Styles Here
//const styles = StyleSheet.create({});

export default App;
