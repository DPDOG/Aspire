import React from 'react';
import {Image} from 'react-native';

import HomeImg from '../assets/png/Home.png';
import CardImg from '../assets/png/Card.png';
import PaymentsImg from '../assets/png/Payments.png';
import CreditImg from '../assets/png/Credit.png';
import AccountImg from '../assets/png/Account.png';

import {BottomNavbar} from './Stacks';
import HomeTabStack from './HomeTabStack';
import CreditTabStack from './CreditTabStack';
import PaymentTabStack from './PaymentTabStack';
import CardTabStack from './CardTabStack';
import AccountTabStack from './AccountTabStack';

const BottomStack = () => {
  return (
    <BottomNavbar.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let img;

          switch (route.name) {
            case 'Home':
              img = <Image source={HomeImg} />;
              break;
            case 'Debit Card':
              img = <Image source={CardImg} />;
              break;
            case 'Payment':
              img = <Image source={PaymentsImg} />;
              break;
            case 'Credit':
              img = <Image source={CreditImg} />;
              break;
            case 'Account':
              img = <Image source={AccountImg} />;
              break;

            default:
              break;
          }
          return img;
        },
        showLabel: true,
        tabBarLabelStyle: {
          color: route.name === 'Debit Card' ? '#01D167' : '#DDDDDD',
        },
      })}>
      <BottomNavbar.Screen
        name={'Home'}
        component={HomeTabStack}
        options={{
          headerShown: false,
        }}
      />
      <BottomNavbar.Screen
        name={'Debit Card'}
        component={CardTabStack}
        options={{
          headerShown: false,
          activeTintColor: 'red',
          style: {color: 'red'},
          tintColor: 'red',
        }}
      />
      <BottomNavbar.Screen
        name={'Payment'}
        component={PaymentTabStack}
        options={{
          headerShown: false,
        }}
      />
      <BottomNavbar.Screen
        name={'Credit'}
        component={CreditTabStack}
        options={{
          headerShown: false,
        }}
      />
      <BottomNavbar.Screen
        name={'Account'}
        component={AccountTabStack}
        options={{
          headerShown: false,
        }}
      />
    </BottomNavbar.Navigator>
  );
};

//Add Styles Here
//const styles = StyleSheet.create({});

export default BottomStack;
