import React from 'react';
import {Payment} from '../screens/payment/Payment';

import {PaymentsStack} from './Stacks';

const PaymentTabStack = () => {
  return (
    <PaymentsStack.Navigator
      initialRouteName="Payment"
      screenOptions={{
        headerShown: false,
      }}>
      <PaymentsStack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: false,
          title: 'Payment',
          headerTitleStyle: {},
          headerStyle: {},
        }}
        initialParams={{}}
      />
    </PaymentsStack.Navigator>
  );
};

export default PaymentTabStack;
