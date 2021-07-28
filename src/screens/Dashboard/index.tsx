import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { HighlightCard } from '../../components/HighlightCard'
import { Transaction, TransactionCard } from '../../components/TransactionCard'
import { categories } from '../../utils/categories'
import { Container, Header, Icon, Image, User, UserContainer, UserHello, UserInfo, UserName, HighlightCardScroll, Transactions, Title, TransactionList, LogoutButton } from './styles'

export interface TransactionOverride extends Transaction {
    id: string
}

export function Dashboard() {
    const [data, setData] = useState<TransactionOverride[]>([])

    async function loadTransacao() {
        const dataKey = "@gofinances:transacaos"
        const response = await AsyncStorage.getItem(dataKey)
        const transacoes = response ? JSON.parse(response) : []

        const transacoesFormatted: TransactionOverride[] = transacoes.map((item:TransactionOverride) => {
            const preco = Number(item.preco).toLocaleString("pt-BR", {
                currency: "BRL",
                style: "currency"
            })
            
            const dateFormatted = Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            }).format(new Date(item.date))
            
            return {
                id: item.id,
                nome: item.nome,
                preco: preco,
                transacaoTipo: item.transacaoTipo,
                categoriaKey: item.categoriaKey,
                date: dateFormatted,
            }

        })
        setData(transacoesFormatted) 
    }
    

    useFocusEffect(
        useCallback(
            () => {
                loadTransacao()
            }, []
        )
    )

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
                    <LogoutButton onPress={() => { }}>
                        <Icon name="power" />
                    </LogoutButton>
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
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item}
                    />}
                    showsVerticalScrollIndicator={false}
                />
            </Transactions>
        </Container>
    )
}


