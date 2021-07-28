import React from 'react'
import { categories } from '../../utils/categories'
import { Container, Title, Preco, TransactionInfo, CategoriaContainer, Icon, CategoriaText, TransactionData } from './styles'


export interface Transaction {
    nome: string
    preco: string
    categoriaKey: string
    date: string
    transacaoTipo: "up" | "down"
}

interface Props {
    data: Transaction
}

export function TransactionCard({ data }: Props) {
    const categoriaFilter = categories.filter((item) => item.key === data.categoriaKey)[0]

    return (
        <Container>
            <Title>
                {data.nome}
            </Title>
            <Preco transacaoTipo={data.transacaoTipo}>
                {data.transacaoTipo === "down" ? "- " : ""}
                {data.preco}
            </Preco>
            <TransactionInfo>
                <CategoriaContainer>
                    <Icon name={categoriaFilter.icon} />
                    <CategoriaText>
                        {categoriaFilter.name}
                    </CategoriaText>
                </CategoriaContainer>

                <TransactionData>{data.date}</TransactionData>
            </TransactionInfo>
        </Container>
    )
}
