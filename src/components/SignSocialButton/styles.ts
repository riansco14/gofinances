import { RectButton, } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";



export const Button = styled(RectButton)`
    width: 100%;
    height: ${RFValue(56)}px;
    background-color: ${({ theme }) => theme.colors.shape} ;

    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    border-radius: 6px;
    margin-bottom: 16px;
`
export const IconContainer = styled.View`
    border-right-color: ${({ theme }) => theme.colors.background};
    border-right-width: 1px;
    align-items: center;
    justify-content: center;
    padding: 16px;
`

export const Title = styled.Text`
    flex: 1;
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title} ;
    text-align: center;

`

