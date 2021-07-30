import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { BorderlessButton, } from "react-native-gesture-handler";

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

export const MonthSelect = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 33px;

    margin-top: 24px;

`
export const Month = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    color: #000000;
`
export const MonthSelectButton = styled(BorderlessButton)``
export const SelectIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: #000000;
`


export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};

`
export const ContainerHistoryCard = styled.View`
    flex: 1;
    padding: 0px 24px;
`

export const GraphContainer = styled.View`
    width: 100%;
    align-items: center;

`