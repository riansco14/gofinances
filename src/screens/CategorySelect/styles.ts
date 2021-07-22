import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`


export const Header = styled.View`
 background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: ${RFValue(102)}px;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 20px;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};

`

export const Category = styled.View`
    width: 100%;
    padding: ${RFValue(15)}px;

    flex-direction: row;
    align-items: center;
`
export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    margin-right: 16px;

    color: ${({ theme }) => theme.colors.text_dark};
`
export const Name = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme})=>theme.colors.text_dark};
`

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({theme})=>theme.colors.text};
`

export const Footer = styled.View`
    padding: 24px;
`