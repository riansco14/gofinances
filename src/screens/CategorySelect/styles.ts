import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { TouchableOpacity } from "react-native";

interface CategoryProps {
    isActive: boolean
}


export const Container = styled(GestureHandlerRootView)`
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

export const Category = styled(TouchableOpacity)<CategoryProps>`
    width: 100%;
    padding: ${RFValue(15)}px;

    flex-direction: row;
    align-items: center;
    
    ${({ theme, isActive }) => isActive && css`
        background-color: ${theme.colors.secondary_light};
    ` }
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