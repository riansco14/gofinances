import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { HighlightCard } from '../../components/HighlightCard'
import { Transaction, TransactionCard } from '../../components/TransactionCard'
import { Container, Header, Icon, Image, User, UserContainer, UserHello, UserInfo, UserName, HighlightCardScroll, Transactions, Title, TransactionList, LogoutButton, LoadingContainer } from './styles'
import { ActivityIndicator } from 'react-native'
import theme from '../../global/styles/theme'
import { useAuth } from '../../hooks/AuthContext'

export interface TransactionOverride extends Transaction {
    id: string
}

interface HighlightDataProps {
    entradas: {
        valorTotal: string,
        ultimaTransacao: string
    },
    saidas: {
        valorTotal: string,
        ultimaTransacao: string
    },
    total: {
        valorTotal: string,
        ultimaTransacao: string
    }
}

export function Dashboard() {
    const [data, setData] = useState<TransactionOverride[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [highlightData, setHighlightData] = useState<HighlightDataProps>({} as HighlightDataProps)

    const { user, signOutWithGoogle } = useAuth()

    let entradasTotal = 0
    let saidasTotal = 0
    let somaTotal = 0

    function resetValues() {
        entradasTotal = 0
        saidasTotal = 0
        somaTotal = 0
    }

    function getLastTransactionDate(
        collection: TransactionOverride[],
    ) {
        if (collection.length <= 0)
            return '-'

        const lastTransaction = new Date(
            Math.max.apply(Math, collection
                .map(transaction => {
                    return new Date(transaction.date).getTime()
                })))

        console.log(lastTransaction);

        return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString('pt-BR', { month: 'long' })}`;
    }

    function dateFormatHighLightCard(transacoes: TransactionOverride[], type: 'up' | 'down') {
        const ultimaTransacao = new Date(
            Math.max.apply(Math, transacoes
                .filter((item: TransactionOverride) => item.transacaoTipo === type)
                .map((item: TransactionOverride) => new Date(item.date).getTime())))


        return `${ultimaTransacao.getDate()} de ${ultimaTransacao.toLocaleString('pt-BR', { month: 'long' })}`
    }

    async function loadTransacao() {
        setIsLoading(true)
        resetValues()
        const dataKey = "@gofinances:transacaos"
        const response = await AsyncStorage.getItem(dataKey)
        const transacoes = response ? JSON.parse(response) : []
        console.log(transacoes);

        const transacoesEntrada = transacoes.filter((item: TransactionOverride) => item.transacaoTipo === "up")
        const transacoesSaida = transacoes.filter((item: TransactionOverride) => item.transacaoTipo === "down")

        const transacoesFormatted: TransactionOverride[] = transacoes.map(
            (item: TransactionOverride) => {
                if (item.transacaoTipo === 'up') {
                    entradasTotal += Number(item.preco)
                } else if (item.transacaoTipo === 'down') {
                    saidasTotal += Number(item.preco)
                }

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

        const ultimaTransacaoEntrada = getLastTransactionDate(transacoesEntrada)
        const ultimaTransacaoSaida = getLastTransactionDate(transacoesSaida)

        somaTotal = entradasTotal - saidasTotal
        setHighlightData({
            entradas: {
                valorTotal: entradasTotal.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency"
                }),
                ultimaTransacao: `Última entrada ${ultimaTransacaoEntrada}`
            },
            saidas: {
                valorTotal: saidasTotal.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency"
                }),
                ultimaTransacao: `Última saída ${ultimaTransacaoSaida}`
            },
            total: {
                valorTotal: somaTotal.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency"
                }),
                ultimaTransacao: `01 a ${ultimaTransacaoSaida}`
            }

        })

        setIsLoading(false)
    }


    useFocusEffect(
        useCallback(
            () => {
                loadTransacao()


            }, []
        )
    )

    if (isLoading)
        return (
            <LoadingContainer>
                <ActivityIndicator color={theme.colors.secondary} size="large" />
            </LoadingContainer>
        )

    return (
        <Container>
            <Header>
                <UserContainer>
                    <UserInfo>
                        <Image source={{ uri: user.image }} />
                        <User>
                            <UserHello>
                                Olá,
                            </UserHello>
                            <UserName>
                                {user.name}
                            </UserName>

                        </User>
                    </UserInfo>
                    <LogoutButton onPress={() => { signOutWithGoogle() }}>
                        <Icon name="power" />
                    </LogoutButton>
                </UserContainer>
            </Header>

            <HighlightCardScroll>
                <HighlightCard type="up"
                    title="Entradas"
                    quantia={highlightData.entradas.valorTotal}
                    ultimaTransacao={highlightData.entradas.ultimaTransacao} />
                <HighlightCard type="down"
                    title="Saídas"
                    quantia={highlightData.saidas.valorTotal}
                    ultimaTransacao={highlightData.saidas.ultimaTransacao} />
                <HighlightCard type="total"
                    title="Total"
                    quantia={highlightData.total.valorTotal}
                    ultimaTransacao={highlightData.total.ultimaTransacao} />
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


