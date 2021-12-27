import React, {useState} from 'react';
import {Alert} from 'react-native';
import InsistsIcon from './assets/insight.png';
import TransferOne from './assets/Transfer.png';
import TransferTwo from './assets/Transfer1.png';
import TransferThree from './assets/Transfer2.png';
import TransferFour from './assets/Transfer3.png';
import {
  Container,
  SubText,
  AvailableBalance,
  HeaderContainer,
  DebitCard,
  HideShowCard,
  RowComponentWithOutSwitch,
  RowComponentParentWrapper,
  RowComponentWithSwitch,
  ParentContainer,
  SpendingLimitProgressBar,
} from './components/Components';
import {maskNumber, maskAmountWithComma} from '../../helpers/Helpers';
import {useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

export const Card = ({navigation}) => {
  const [showCardNumber, setShowCardNumber] = useState(true);
  const commonState = useSelector(state => state.common);
  const [cardDetails, setCardDetails] = useState(commonState.card);
  const [limit, setLimit] = useState(commonState.limit);
  const addedLimitStatus = limit.addedLimit > 0;

  useFocusEffect(
    React.useCallback(() => {
      setCardDetails(commonState.card);
      setLimit(commonState.limit);
      return () => {};
    }, [commonState.card, commonState.limit]),
  );

  return (
    <ParentContainer showsVerticalScrollIndicator={false}>
      <Container>
        <HeaderContainer headerText="Debit Card" showBack={false} />
        <SubText>Available balance</SubText>
        <AvailableBalance balance={maskAmountWithComma(limit.balanceLimit)} />

        <HideShowCard
          toggleCardNumber={showCardNumber}
          onPress={() => setShowCardNumber(!showCardNumber)}
        />
      </Container>

      <RowComponentParentWrapper>
        <DebitCard
          holderName={cardDetails.cardName}
          cardNumber={maskNumber(showCardNumber, cardDetails.cardNumber, false)}
          cardThru={cardDetails.cardThru}
          cardCvv={maskNumber(showCardNumber, cardDetails.cardCvv, true)}
        />

        {addedLimitStatus && (
          <SpendingLimitProgressBar
            filled={
              ((limit.totalLimit - limit.balanceLimit) / limit.totalLimit) * 100
            }
            addedLimit={maskAmountWithComma(
              limit.totalLimit - limit.balanceLimit,
            )}
            totalLimit={maskAmountWithComma(limit.totalLimit)}
            debitCardText="Debit card spending limit"
          />
        )}

        <RowComponentWithOutSwitch
          imageIcon={InsistsIcon}
          titleText="Top-up account"
          subText="Deposit money to your account to use with card"
        />

        <RowComponentWithSwitch
          imageIcon={TransferOne}
          titleText="Weekly spending limit"
          subText="You haven’t set any spending limit on card"
          onPress={() => {
            navigation.navigate('SpendingLimit');
          }}
          limitStatus={addedLimitStatus}
        />

        <RowComponentWithSwitch
          imageIcon={TransferTwo}
          titleText="Freeze card"
          subText="Your debit card is currently active"
          onPress={() => {
            Alert.alert('Not implemented yet.');
          }}
        />

        <RowComponentWithOutSwitch
          imageIcon={TransferFour}
          titleText="Get a new card"
          subText="This deactivates your current debit card"
        />

        <RowComponentWithOutSwitch
          imageIcon={TransferThree}
          titleText="Deactivated cards"
          subText="Your previously deactivated cards"
        />
      </RowComponentParentWrapper>
    </ParentContainer>
  );
};
