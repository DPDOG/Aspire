import React from 'react';
import {Text, Image, View} from 'react-native';
import Logo from '../../assets/png/Logo.png';
import {commonStyles} from '../../styles/styles';

export const Credit = () => {
  return (
    <View style={commonStyles.emptyScreenView}>
      <Image source={Logo} />
      <Text style={commonStyles.emptyScreenText}>
        Credit Not Implemented Yet
      </Text>
    </View>
  );
};
