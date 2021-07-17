import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: 5px;

    margin-right: 16px;

    padding: 19px 23px;

    padding-bottom: 42px;

`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(21)}px;
    color: ${({ theme }) => theme.colors.title};
`
export const Icon = styled(Feather)`
    font-size: ${RFValue(40)}px;
    color: ${({ theme }) => theme.colors.sucess};
`
export const Footer = styled.View`
    margin-top: ${RFValue(38)}px;
`
export const Quantia = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    line-height: ${RFValue(48)}px;
    color: ${({ theme }) => theme.colors.title};
`
export const UltimaTransacao = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.text};
`