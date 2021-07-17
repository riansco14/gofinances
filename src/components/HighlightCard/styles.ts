import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
    type: 'up' | 'down' | 'total'
}

export const Container = styled.View<TypeProps>`
    background-color: ${({ theme }) => theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: 5px;

    margin-right: 16px;

    padding: 19px 23px;

    padding-bottom: 42px;

    ${({type, theme}) => type === 'total' && css`
        background-color: ${theme.colors.secondary};`
        }

`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`
export const Title = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(21)}px;
    color: ${({ theme }) => theme.colors.title};

    ${({type, theme}) => type === 'total' && css`
        color: ${theme.colors.shape};`
        }
`
export const Icon = styled(Feather) <TypeProps>`
    font-size: ${RFValue(40)}px;
    color: ${({ theme }) => theme.colors.sucess};

    ${({type, theme}) => type === 'up' && css`
        color: ${theme.colors.sucess};`
    }

    ${({type, theme}) => type === 'down' && css`
            color: ${theme.colors.attention};`
        }

    ${({type, theme}) => type === 'total' && css`
            color: ${theme.colors.shape};`
        }

`
export const Footer = styled.View`
    margin-top: ${RFValue(38)}px;
`
export const Quantia = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    line-height: ${RFValue(48)}px;
    color: ${({ theme }) => theme.colors.title};

    ${({type, theme}) => type === 'total' && css`
        color: ${theme.colors.shape};`
        }
`
export const UltimaTransacao = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.text};

    ${({type, theme}) => type === 'total' && css`
        color: ${theme.colors.shape};`
        }
`