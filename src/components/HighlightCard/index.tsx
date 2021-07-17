import React from 'react'
import { Container, Header, Title, Icon, Footer, Quantia, UltimaTransacao } from './styles'

export function HighlightCard() {
    return (
        <Container>
            <Header>
                <Title>
                    Entrada
                </Title>
                <Icon name="arrow-up-circle" />
                </Header>
                <Footer>
                    <Quantia>R$ 17.400,00</Quantia>
                    <UltimaTransacao>
                        Ultima entrada dia 13 de abril
                    </UltimaTransacao>
                </Footer>

            
        </Container>
    )
}
