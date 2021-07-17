import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.background};
`
export const UserContainer = styled.View`
    padding: 0 24px;
`

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({theme})=>theme.colors.primary};
`
export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: red;
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
