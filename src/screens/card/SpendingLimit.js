import React, {useState} from 'react';
import {Alert} from 'react-native';
import {
  Container,
  HeaderContainer,
  RowComponentParentWrapper,
  ParentContainer,
  SpendLimit,
  SpentBox,
  WeeklyStandardText,
  FastCashBoxParentWrapper,
  FastCash,
  SaveButton,
} from './components/Components';
import {maskAmountWithComma} from '../../helpers/Helpers';
import {useSelector, useDispatch} from 'react-redux';
import {saveLimit} from '../../redux/service/Service';

const saveSpendingLimit = (
  amount,
  dispatch,
  limit,
  navigation,
  setFastCashValue,
) => {
  let finalAmount = amount.replace(',', '');
  let response = {
    totalLimit: limit.totalLimit,
    addedLimit: finalAmount,
    balanceLimit: limit.balanceLimit - finalAmount,
  };
  if (saveLimit(dispatch, response)) {
    Alert.alert('Limit added successfully.');
    setFastCashValue('');
    navigation.navigate('Card');
  } else {
    Alert.alert('Limit failed.');
  }
};

const checkSpendingLimit = (amount, limit) => {
  let finalAmount = amount.replace(',', '');
  if (finalAmount > limit.balanceLimit) {
    Alert.alert(
      'You can not set this $' +
        amount +
        ' as limit because you have $' +
        maskAmountWithComma(limit.balanceLimit) +
        ' left.',
    );
    return false;
  } else {
    return true;
  }
};

export const SpendingLimit = ({navigation}) => {
  const [fastCashValue, setFastCashValue] = useState('');
  const commonState = useSelector(state => state.common);
  const limit = commonState.limit;
  const dispatch = useDispatch();
  return (
    <ParentContainer showsVerticalScrollIndicator={false}>
      <Container>
        <HeaderContainer
          headerText="Spending Limit"
          showBack={true}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Container>
      <RowComponentParentWrapper paddingTop={'30px'}>
        <SpendLimit spendLimitText="Set a weekly debit card spending limit" />
        <SpentBox
          onChangeText={amount => {
            amount = amount.replace(/[^0-9/.]/g, '');
            if (amount !== '') {
              amount = maskAmountWithComma(amount);
            }
            setFastCashValue(amount);
          }}
          valueData={fastCashValue}
        />
        <WeeklyStandardText>
          Here weekly means the last 7 days - not the calendar week
        </WeeklyStandardText>
        <FastCashBoxParentWrapper>
          <FastCash
            amount="5,000"
            onPress={() => {
              setFastCashValue(maskAmountWithComma(5000));
            }}
          />
          <FastCash
            amount="10,000"
            onPress={() => {
              setFastCashValue(maskAmountWithComma(10000));
            }}
          />
          <FastCash
            amount="20,000"
            onPress={() => {
              setFastCashValue(maskAmountWithComma(20000));
            }}
          />
        </FastCashBoxParentWrapper>
        <SaveButton
          onPress={() => {
            if (checkSpendingLimit(fastCashValue, limit)) {
              saveSpendingLimit(
                fastCashValue,
                dispatch,
                limit,
                navigation,
                setFastCashValue,
              );
            }
          }}
          makeDisable={fastCashValue === ''}
        />
      </RowComponentParentWrapper>
    </ParentContainer>
  );
};
