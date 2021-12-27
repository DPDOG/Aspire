import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Logo from '../../../assets/png/Logo.png';
import AspireLogo from '../assets/AspireLogo.png';
import VisaLogo from '../assets/VisaLogo.png';
import ShowIcon from '../assets/Show.png';
import HideIcon from '../assets/Hide.png';
import SpendLimitIcon from '../assets/pickup-car.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ParentContainer = styled.ScrollView`
  flex: 1;
  height: 100%;
  background-color: #0c365a;
`;

export const Container = styled.View`
  padding: 70px 20px;
  width: 100%;
  flex: 1;
`;

export const HeaderTop = styled.View`
  width: 100%;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  text-align: left;
  color: #ffffff;
  font-weight: bold;
  margin-top: 15px;
`;

export const SubText = styled.Text`
  font-size: ${props => props.fontSize || '14px'};
  text-align: left;
  color: ${props => props.textColor || '#ffffff'};
  font-weight: ${props => props.textColor || '300'};
  margin-top: 15px;
`;

const CurrencyStyle = styled.View`
  background-color: #01d167;
  color: #ffffff;
  border-radius: 5px;
  margin: 10px;
  width: 40px;
  height: 22px;
  text-align: left;
  padding: 2px 0;
`;

const CurrentText = styled.Text`
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
`;

export const Currency = () => {
  return (
    <CurrencyStyle>
      <CurrentText>$$</CurrentText>
    </CurrencyStyle>
  );
};

const AvailableBalanceNumber = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 3px;
  margin-top: 6px;
`;

const AvailableBalanceWrapper = styled.View`
  flex-direction: row;
  margin-left: -10px;
`;

export const AvailableBalance = ({balance}) => {
  return (
    <AvailableBalanceWrapper>
      <Currency />
      <AvailableBalanceNumber>{balance}</AvailableBalanceNumber>
    </AvailableBalanceWrapper>
  );
};

const HeaderContainerWrapper = styled.View``;

const HeaderContainerBackWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderContainerImage = styled.Image``;

const HeaderContainerBackIconText = styled.Text`
  color: #ffffff;
  font-size: 13px;
  text-decoration-line: underline;
`;

const HeaderContainerBackIconClick = styled.TouchableOpacity``;

export const HeaderContainer = ({headerText, onPress, showBack}) => {
  return (
    <HeaderContainerWrapper>
      <HeaderContainerBackWrapper>
        <HeaderContainerBackIconClick onPress={onPress}>
          <HeaderContainerBackIconText>
            {showBack ? 'Back' : ''}
          </HeaderContainerBackIconText>
        </HeaderContainerBackIconClick>
        <HeaderContainerImage source={Logo} />
      </HeaderContainerBackWrapper>
      <HeaderText>{headerText}</HeaderText>
    </HeaderContainerWrapper>
  );
};

const DebitCardWrapper = styled.View`
  background-color: #01d167;
  border-radius: 10px;
  padding: 25px 20px;
  margin: 0 22px;
  margin-top: -83px;
  position: absolute;
  width: 100%;
  z-index: 9;
`;

const DebitCardCompanyLogoWrapper = styled.View`
  align-items: flex-end;
`;

const DebitCardCompanyLogo = styled.Image``;

const DebitCardHolderName = styled.Text`
  font-size: 22px;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 2px;
  margin-vertical: 10px;
`;

const DebitCardNumber = styled.Text`
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 20px 0;
`;

const DebitCardThru = styled.Text`
  font-size: 13px;
  color: #ffffff;
  font-weight: 500;
`;

const DebitCardCvv = styled.Text`
  font-size: 13px;
  color: #ffffff;
  font-weight: 500;
  margin-left: 10px;
`;

const CardThruCvvWrapper = styled.View`
  flex-direction: row;
`;

const DebitCardTypeLogo = styled.Image``;

export const DebitCard = ({holderName, cardNumber, cardThru, cardCvv}) => {
  return (
    <DebitCardWrapper>
      <DebitCardCompanyLogoWrapper>
        <DebitCardCompanyLogo source={AspireLogo} />
      </DebitCardCompanyLogoWrapper>
      <DebitCardHolderName>{holderName}</DebitCardHolderName>
      <DebitCardNumber>{cardNumber}</DebitCardNumber>
      <CardThruCvvWrapper>
        <DebitCardThru>Thru: {cardThru}</DebitCardThru>
        <DebitCardCvv>CVV: {cardCvv}</DebitCardCvv>
      </CardThruCvvWrapper>
      <DebitCardCompanyLogoWrapper>
        <DebitCardTypeLogo source={VisaLogo} />
      </DebitCardCompanyLogoWrapper>
    </DebitCardWrapper>
  );
};

const HideShowCardWrapper = styled.TouchableOpacity`
  background-color: #ffffff;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 15px;
  padding-horizontal: 10px;
  width: 151px;
  border-radius: 6px;
  align-self: flex-end;
  z-index: -1;
`;

const HideShowCardIcon = styled.Image``;

const HideShowCardText = styled.Text`
  color: #01d167;
  font-size: 12px;
  margin-left: 7px;
`;

export const HideShowCard = ({toggleCardNumber, onPress}) => {
  return (
    <HideShowCardWrapper onPress={onPress}>
      <HideShowCardIcon source={toggleCardNumber ? ShowIcon : HideIcon} />
      <HideShowCardText>
        {toggleCardNumber ? 'Show' : 'Hide'} card number
      </HideShowCardText>
    </HideShowCardWrapper>
  );
};

const RowComponentWrapper = styled.View`
  flex-direction: row;
  margin: 20px 0;
  width: 100%;
  height: 100%;
  flex: 1;
`;

const RowComponentImage = styled.Image`
  flex: 1;
`;

const RowComponentTextWrapper = styled.View`
  margin-left: 15px;
  flex: 9;
`;

const RowComponentTitleText = styled.Text`
  font-size: 14px;
  color: #25345f;
`;

const RowComponentSubText = styled.Text`
  font-size: 13px;
  color: #222222;
  opacity: 0.4;
  letter-spacing: 0px;
`;

const RowComponentSwitchTap = styled.TouchableOpacity`
  flex: 1;
  background-color: ${props => (props.limitStatus ? '#01d167' : '#EEEEEE')};
  width: 34px;
  height: 20px;
  border-radius: 17px;
`;

const RowComponentSwitchBackground = styled.View`
  background-color: #ffffff;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  margin: 2px 3px;
  ${props => (props.limitStatus ? 'margin-left: 13px' : '')};
`;

export const RowComponentWithOutSwitch = ({imageIcon, titleText, subText}) => {
  return (
    <RowComponentWrapper>
      <RowComponentImage source={imageIcon} />
      <RowComponentTextWrapper>
        <RowComponentTitleText>{titleText}</RowComponentTitleText>
        <RowComponentSubText>{subText}</RowComponentSubText>
      </RowComponentTextWrapper>
    </RowComponentWrapper>
  );
};

export const RowComponentWithSwitch = ({
  imageIcon,
  titleText,
  subText,
  onPress,
  limitStatus,
}) => {
  return (
    <RowComponentWrapper>
      <RowComponentImage source={imageIcon} />
      <RowComponentTextWrapper>
        <RowComponentTitleText>{titleText}</RowComponentTitleText>
        <RowComponentSubText>{subText}</RowComponentSubText>
      </RowComponentTextWrapper>
      <RowComponentSwitchTap onPress={onPress} limitStatus={limitStatus}>
        <RowComponentSwitchBackground limitStatus={limitStatus} />
      </RowComponentSwitchTap>
    </RowComponentWrapper>
  );
};

export const RowComponentParentWrapper = styled.View`
  background-color: #ffffff;
  padding: 10px 20px;
  padding-top: ${props => props.paddingTop || '140px'};
  z-index: 1;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  width: 100%;
  height: ${windowHeight - 250}px;
`;

const SpendLimitWrapper = styled.View`
  flex-direction: row;
`;

const SpendLimitImage = styled.Image``;

const SpendLimitText = styled.Text`
  font-size: 14px;
  color: #222222;
  margin-left: 10px;
  margin-top: -2px;
`;

export const SpendLimit = ({spendLimitText}) => {
  return (
    <SpendLimitWrapper>
      <SpendLimitImage source={SpendLimitIcon} />
      <SpendLimitText>{spendLimitText}</SpendLimitText>
    </SpendLimitWrapper>
  );
};

const SpentBoxWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
  padding-bottom: 5px;
`;

const SpentBoxTextInput = styled.TextInput`
  width: 80%;
  color: #222222;
  font-size: 24px;
  font-weight: bold;
`;

export const SpentBox = ({onChangeText, valueData}) => {
  return (
    <SpentBoxWrapper>
      <Currency />
      <SpentBoxTextInput onChangeText={onChangeText} value={valueData} />
    </SpentBoxWrapper>
  );
};

export const WeeklyStandardText = styled.Text`
  font-size: 12px;
  color: #22222266;
  margin: 10px 0;
  align-self: center;
`;

export const FastCashBoxParentWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin: 20px 0;
`;

const FastCashBoxWrapper = styled.TouchableOpacity`
  background-color: #01d1671a;
  border-radius: 5px;
`;

const FastCashBoxText = styled.Text`
  color: #01d167;
  font-size: 12px;
  font-weight: bold;
  padding: 10px 20px;
`;

export const FastCash = ({amount, onPress}) => {
  return (
    <FastCashBoxWrapper onPress={onPress}>
      <FastCashBoxText>$$ {amount}</FastCashBoxText>
    </FastCashBoxWrapper>
  );
};

const SaveButtonTouchable = styled.TouchableOpacity`
  background-color: ${props => (props.disabled ? '#EEEEEE' : '#01d167')};
  width: 300px;
  height: 56px;
  border-radius: 150px;
  align-self: center;
  justify-content: center;
  position: absolute;
  bottom: 50px;
`;

const SaveButtonText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  text-align: center;
`;

export const SaveButton = ({onPress, makeDisable}) => {
  return (
    <SaveButtonTouchable onPress={onPress} disabled={makeDisable}>
      <SaveButtonText>Save</SaveButtonText>
    </SaveButtonTouchable>
  );
};

const SpendingLimitProgressBarWapper = styled.View`
  margin-vertical: 10px;
`;
const SpendingLimitProgressBarTextWapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const SpendingLimitProgressBarAmountWapper = styled.View`
  flex-direction: row;
  width: 100%;
  flex: 1;
`;
const SpendingLimitProgressBarViewWapper = styled.View`
  flex-direction: row;
  width: 100%;
  margin-vertical: 7px;
`;
const SpendingLimitProgressBarText = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #222222;
  align-self: flex-start;
  flex: 2;
`;
const SpendingLimitProgressBarLeftLimit = styled.Text`
  color: #01d167;
  font-size: 13px;
  font-weight: bold;
`;
const SpendingLimitProgressBarTotalLimit = styled.Text`
  color: #22222233;
  font-size: 13px;
  font-weight: bold;
  margin-left: 3px;
`;
const SpendingLimitProgressBarFilled = styled.View`
  background-color: #01d167;
  padding: 7px 0px;
  width: ${props => props.filled || 0}%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const SpendingLimitProgressBarEmpty = styled.View`
  background-color: #01d16729;
  padding: 7px 0px;
  width: ${props => (props.filled === 100 ? 0 : 100 - props.filled || 100)}%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const SpendingLimitProgressBar = ({
  filled,
  addedLimit,
  totalLimit,
  debitCardText,
}) => {
  return (
    <SpendingLimitProgressBarWapper>
      <SpendingLimitProgressBarTextWapper>
        <SpendingLimitProgressBarText>
          {debitCardText}
        </SpendingLimitProgressBarText>
        <SpendingLimitProgressBarAmountWapper>
          <SpendingLimitProgressBarLeftLimit>
            ${addedLimit}
          </SpendingLimitProgressBarLeftLimit>
          <SpendingLimitProgressBarTotalLimit>
            | ${totalLimit}
          </SpendingLimitProgressBarTotalLimit>
        </SpendingLimitProgressBarAmountWapper>
      </SpendingLimitProgressBarTextWapper>
      <SpendingLimitProgressBarViewWapper>
        <SpendingLimitProgressBarFilled filled={filled} />
        <SpendingLimitProgressBarEmpty filled={filled} />
      </SpendingLimitProgressBarViewWapper>
    </SpendingLimitProgressBarWapper>
  );
};
