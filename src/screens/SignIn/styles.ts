import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;

`

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.primary} ;
    width: 100%;
    height: 70%;
    align-items: center;
    justify-content: flex-end;

`
export const TitleContainer = styled.View`
    align-items: center;
`
export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;

    margin-top: 40px;
`
export const SubTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;

    margin-top: 80px;
    margin-bottom: 60px;
`

export const ButtonContainer = styled.View`
    width: 100%;
    padding: 16px 18px;
    background-color: ${({ theme }) => theme.colors.shape} ;

    flex-direction: row;
    justify-content: space-around;

    border-radius: 6px;
    margin: 0 24px;
`

export const ButtonTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title} ;


`

export const Footer = styled.View`
    width: 100%;
    height: 30%;
    background-color:${({ theme }) => theme.colors.secondary} ;
`

export const FooterContainer = styled.View`
    margin-top: ${RFPercentage(-4)}px;

    padding: 0 32px;

`
