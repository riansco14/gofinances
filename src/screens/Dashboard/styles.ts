import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { FlatList } from "react-native";
import { TransactionOverride } from ".";
import { BorderlessButton } from "react-native-gesture-handler";


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`
export const UserContainer = styled.View`
    padding: 0 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${RFValue(28)}px;
`

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
`
export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`
export const Image = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;

    border-radius: 10px;
`
export const User = styled.View`
    margin-left: 17px;
`
export const UserHello = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};
`
export const UserName = styled.Text`
     font-family: ${({ theme }) => theme.fonts.bold};
     font-size: ${RFValue(18)}px;
     color: ${({ theme }) => theme.colors.shape};
`
export const LogoutButton = styled(BorderlessButton)`

`

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`

export const HighlightCardScroll = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`

export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;

    margin-top: ${RFPercentage(12)}px;

`

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-bottom: 16px;
`

export const TransactionList = styled(FlatList as new () => FlatList<TransactionOverride>)
    .attrs({
        showsVerticalScrollIndicator: false,
    })``