import React from 'react';
import {Account} from '../screens/account/Account';

import {AccountStack} from './Stacks';

const AccountTabStack = () => {
  return (
    <AccountStack.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerShown: false,
      }}>
      <AccountStack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          title: 'Account',
          headerTitleStyle: {},
          headerStyle: {},
        }}
        initialParams={{}}
      />
    </AccountStack.Navigator>
  );
};

export default AccountTabStack;
