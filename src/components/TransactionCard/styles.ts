import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons'
import { Transaction } from ".";


export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    padding: 17px 24px;
    border-radius: 6px;
    margin-bottom: 16px;

`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(21)}px;
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: 2px;

`
export const Preco = styled.Text<Transaction>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    line-height: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.sucess};
    color: ${({ theme, type }) => type === 'up' ? theme.colors.sucess : theme.colors.attention};


`
export const TransactionInfo = styled.View`
    margin-top: 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const CategoriaContainer = styled.View`
    flex-direction: row;
    align-items: center;
`
export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
    margin-right: 17px;
`
export const CategoriaText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(21)}px;
    color: ${({ theme }) => theme.colors.text};
`
export const TransactionData = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(21)}px;
    color: ${({ theme }) => theme.colors.text};
`