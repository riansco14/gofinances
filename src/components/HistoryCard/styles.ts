import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface Props{
    color: string
}


export const Container = styled.View<Props>`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.shape};

    border-radius: 6px;
    border-left-width: 4px;
    border-left-color: ${({ color }) => color};

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 13px 24px;
    margin-bottom: 8px;
`

export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.title};
`

export const Preco = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.title};
`