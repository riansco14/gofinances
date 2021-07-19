import React from 'react'
import { Container, Title, Preco, TransactionInfo, CategoriaContainer, Icon, CategoriaText, TransactionData } from './styles'

interface CategoriaProps {
    name: string
    icon: string
}

export interface Transaction {
    title: string
    preco: string
    categoria: CategoriaProps
    data: string
}

interface Props {
    data: Transaction
}

export function TransactionCard({ data }: Props) {
    const type = data.preco.includes("-") ? "down" : "up"
    
    return (
        <Container>
            <Title>
                {data.title}
            </Title>
            <Preco type={type}>
                {data.preco}
            </Preco>
            <TransactionInfo>
                <CategoriaContainer>
                    <Icon name={data.categoria.icon} />
                    <CategoriaText>
                        {data.categoria.name}
                    </CategoriaText>
                </CategoriaContainer>

                <TransactionData>{data.data}</TransactionData>
            </TransactionInfo>
        </Container>
    )
}
