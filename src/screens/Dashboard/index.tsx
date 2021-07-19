import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import { Transaction, TransactionCard } from '../../components/TransactionCard'
import { Container, Header, Icon, Image, User, UserContainer, UserHello, UserInfo, UserName, HighlightCardScroll, Transactions, Title, TransactionList } from './styles'

export interface TransactionOverride extends Transaction{
    id: string
}

export function Dashboard() {
    const transactions = [{
        id: '1',
        title: "Desenvolvimento de site",
        preco: "R$ 12.000,00",
        categoria: {
            name: "Vendas",
            icon: "dollar-sign",
        },
        data: "13/04/2020",
    },
    {
        id: '2',
        title: "Hamburgueria Pizzy",
        preco: "- R$ 59,00",
        categoria: {
            name: "Alimentação",
            icon: "coffee",
        },
        data: "13/04/2020",
    },
    {
        id: '3',
        title: "Desenvolvimento de site",
        preco: "R$ 12.000,00",
        categoria: {
            name: "Vendas",
            icon: "shopping-bag",
        },
        data: "13/04/2020",
    }
    ] as TransactionOverride[]


    return (
        <Container>
            <Header>
                <UserContainer>
                    <UserInfo>
                        <Image source={{ uri: "https://github.com/riansco14.png" }} />
                        <User>
                            <UserHello>
                                Olá,
                            </UserHello>
                            <UserName>
                                Rian
                            </UserName>

                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserContainer>
            </Header>

            <HighlightCardScroll>
                <HighlightCard type="up" title="Entradas" quantia="R$ 17.400,00" ultimaTransacao="Última entrada dia 13 de abril" />
                <HighlightCard type="down" title="Saídas" quantia="R$ 1.259,00" ultimaTransacao="Última saída dia 03 de abril" />
                <HighlightCard type="total" title="Total" quantia="R$ 16.141,00" ultimaTransacao="01 à 16 de abril" />
            </HighlightCardScroll>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionList
                    data={transactions}
                    keyExtractor={item=>item.id}
                    renderItem={({ item }) => <TransactionCard data={item}
                    />}
                    showsVerticalScrollIndicator={false}
                />
            </Transactions>
        </Container>
    )
}


