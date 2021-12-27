import React from 'react';
import {Credit} from '../screens/credit/Credit';

import {CreditStack} from './Stacks';

const CreditTabStack = () => {
  return (
    <CreditStack.Navigator
      initialRouteName="Credit"
      screenOptions={{
        headerShown: false,
      }}>
      <CreditStack.Screen
        name="Credit"
        component={Credit}
        options={{
          headerShown: false,
          title: 'Credit',
          headerTitleStyle: {},
          headerStyle: {},
        }}
        initialParams={{}}
      />
    </CreditStack.Navigator>
  );
};

export default CreditTabStack;
