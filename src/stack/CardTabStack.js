import React from 'react';
import {Card} from '../screens/card/Card';
import {SpendingLimit} from '../screens/card/SpendingLimit';

import {CardStack} from './Stacks';

const CardTabStack = () => {
  return (
    <CardStack.Navigator
      initialRouteName="Card"
      screenOptions={{
        headerShown: false,
      }}>
      <CardStack.Screen
        name="Card"
        component={Card}
        options={{
          headerShown: false,
          title: 'Card',
          headerTitleStyle: {},
          headerStyle: {},
        }}
        initialParams={{}}
      />
      <CardStack.Screen
        name="SpendingLimit"
        component={SpendingLimit}
        options={{
          headerShown: false,
          title: 'SpendingLimit',
          headerTitleStyle: {},
          headerStyle: {},
        }}
        initialParams={{}}
      />
    </CardStack.Navigator>
  );
};

export default CardTabStack;
