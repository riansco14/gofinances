import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { HistoryCard } from '../../components/HistoryCard'
import { categories } from '../../utils/categories'
import { TransactionOverride } from '../Dashboard'
import { Container, Header, Title, ContainerHistoryCard } from './styles'

interface CategoriaProps {
    categoriaKey: string
    categoriaName: string
    color: string
    valorTotal: string
}

export function Resume() {
    const [categorias, setCategorias] = useState<CategoriaProps[]>({} as CategoriaProps[])


    console.log(categorias);

    async function loadData() {
        const dataKey = "@gofinances:transacaos"
        const response = await AsyncStorage.getItem(dataKey)
        let responseParsed = response ? JSON.parse(response) : []
        responseParsed = responseParsed.filter((item: TransactionOverride) => item.transacaoTipo === "down")

        const categoriasTemp: CategoriaProps[] = []

        categories.forEach((itemCategoria) => {
            let categoriaSoma = 0

            responseParsed.forEach((itemTransacao: TransactionOverride) => {
                if (itemTransacao.categoriaKey === itemCategoria.key) {
                    categoriaSoma += Number(itemTransacao.preco)
                }
            })

            const categoriaSomaFormatted = categoriaSoma.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })
            if (categoriaSoma > 0) {
                categoriasTemp.push({
                    categoriaKey: itemCategoria.key,
                    categoriaName: itemCategoria.name,
                    color: itemCategoria.color,
                    valorTotal: categoriaSomaFormatted,
                })
            }

        })

        setCategorias(categoriasTemp)
        console.log(categoriasTemp);

    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <Container>
            <Header>
                <Title>
                    Resumo por categoria
                </Title>
            </Header>
            <ContainerHistoryCard>
                <FlatList
                    style={{ flex: 1 }}
                    data={categorias}
                    keyExtractor={(item: CategoriaProps) => item.categoriaKey}
                    renderItem={({ item }: { item: CategoriaProps }) => (
                        <HistoryCard
                            title={item.categoriaName}
                            color={item.color}
                            preco={String(item.valorTotal)}
                        />
                    )} />
            </ContainerHistoryCard>
        </Container>
    )
}
