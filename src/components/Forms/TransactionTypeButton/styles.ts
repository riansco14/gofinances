import styled, { css } from "styled-components/native";

import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";


interface Props {
    isActive: boolean
    type: "up" | "down"
}


export const Container = styled(TouchableOpacity)<Props>`
    width: 48%;
    flex-direction: row;
    align-items: center;

    height: ${RFValue(56)}px;

    border: 1.5px solid ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    align-items: center;
    justify-content: center;

    ${({ theme, isActive, type }) => isActive && type === "up" && css`
        background-color: ${theme.colors.sucess_light};
        border: none;
    `}

    ${({ theme, isActive, type }) => isActive && type === "down" && css`
        background-color: ${theme.colors.attention_light};
        border: none;
    `}


`

export const Icon = styled(Feather) <Props>`
    font-size: ${RFValue(20)}px;
    color: ${({ theme, type }) => type === "up" ? theme.colors.sucess : theme.colors.attention};
    
    margin-right: 12px;
`


export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`

