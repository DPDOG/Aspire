import React from 'react';
import {Home} from '../screens/home/Home';

import {HomeStack} from './Stacks';

const HomeTabStack = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: 'Home',
          headerTitleStyle: {},
          headerStyle: {},
        }}
        initialParams={{}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeTabStack;
