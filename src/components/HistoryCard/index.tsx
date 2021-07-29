import React from 'react'
import { Container, Title, Preco } from './styles'

interface HistoryCardProps {
    title: string
    preco: string
    color: string
}

export function HistoryCard({
    title,
    preco,
    color }: HistoryCardProps
) {
    return (
        <Container color={color}>
            <Title>{title}</Title>
            <Preco>{preco}</Preco>
        </Container>
    )
}
