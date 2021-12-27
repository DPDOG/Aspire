import React from 'react';
import {Text, Image, View} from 'react-native';
import Logo from '../../assets/png/Logo.png';
import {commonStyles} from '../../styles/styles';

export const Account = () => {
  return (
    <View style={commonStyles.emptyScreenView}>
      <Image source={Logo} />
      <Text style={commonStyles.emptyScreenText}>
        Account Not Implemented Yet
      </Text>
    </View>
  );
};
