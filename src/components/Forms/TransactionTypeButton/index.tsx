import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Container, Button, Icon, Title } from './styles'

export interface Props extends RectButtonProps {
    title: string
    type: "up" | "down"
    isActive: boolean
}

export function TransactionTypeButton({ title, type, isActive, ...rest }: Props) {

    const icon = type === "up" ? "arrow-down-circle" : "arrow-up-circle"

    return (
        <Container type={type} isActive={isActive} >
            <Button  {...rest}>
                <Icon name={icon} type={type} />
                <Title>{title}</Title>
            </Button>
        </Container>
    )
}
