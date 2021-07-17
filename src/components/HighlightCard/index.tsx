import React from 'react'
import { Container, Header, Title, Icon, Footer, Quantia, UltimaTransacao } from './styles'

interface Props {
    title: string
    quantia: string
    ultimaTransacao: string
    type: 'up' | 'down' | 'total'
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}


export function HighlightCard({
    title,
    quantia,
    ultimaTransacao,
    type
}: Props) {
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>
                    {title}
                </Title>
                <Icon name={icon[type]} type={type} />
            </Header>
            <Footer>
                <Quantia type={type}>{quantia}</Quantia>
                <UltimaTransacao type={type}>
                    {ultimaTransacao}
                </UltimaTransacao>
            </Footer>


        </Container>
    )
}
