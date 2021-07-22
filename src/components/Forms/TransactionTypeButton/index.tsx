import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from './styles'

export interface Props extends TouchableOpacityProps {
    title: string
    type: "up" | "down"
    isActive: boolean
}

export function TransactionTypeButton({ title, type, isActive, ...rest }: Props) {

    const icon = type === "up" ? "arrow-down-circle" : "arrow-up-circle"

    return (
        <Container type={type} isActive={isActive} {...rest}>
            <Icon name={icon} type={type} />
            <Title>{title}</Title>
        </Container>
    )
}
