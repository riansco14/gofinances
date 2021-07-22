import styled from "styled-components/native";

import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 18px 16px;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 6px;


`
export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};

`
export const Icon = styled(Feather)`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.text};
`

