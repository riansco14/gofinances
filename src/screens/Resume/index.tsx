import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useCallback, useState } from 'react'
import { VictoryPie } from 'victory-native'
import { FlatList } from 'react-native'
import { categories } from '../../utils/categories'
import { TransactionOverride } from '../Dashboard'
import { HistoryCard } from '../../components/HistoryCard'
import { Container, Header, Title, ContainerHistoryCard, GraphContainer, MonthSelect, MonthSelectButton, SelectIcon, Month } from './styles'
import theme from '../../global/styles/theme'
import AppLoading from 'expo-app-loading'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { addMonths, subMonths } from 'date-fns/esm'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useFocusEffect } from '@react-navigation/native'

interface CategoriaProps {
    categoriaKey: string
    categoriaName: string
    color: string
    valorTotal: number
    valorTotalFormatted: string
    porcentagem: number
    porcentagemFormatted: string
}

export function Resume() {
    const [isLoading, setIsLoading] = useState(true)
    const [categorias, setCategorias] = useState<CategoriaProps[]>({} as CategoriaProps[])
    const [selectedDate, setSelectedDate] = useState(new Date())

    const tabBarHeight = useBottomTabBarHeight();

    function handleDateChange(action: 'next' | 'prev') {
        if (action === 'next') {
            const newDate = addMonths(selectedDate, 1)
            setSelectedDate(newDate)
        }
        else {
            const newDate = subMonths(selectedDate, 1)
            setSelectedDate(newDate)
        }

    }
    async function loadData() {
        setIsLoading(true)
        const dataKey = "@gofinances:transacaos"
        const response = await AsyncStorage.getItem(dataKey)
        let responseParsed = response ? JSON.parse(response) : []
        responseParsed = responseParsed.filter(
            (item: TransactionOverride) =>
                item.transacaoTipo === "down" &&
                new Date(item.date).getMonth() === selectedDate.getMonth() &&
                new Date(item.date).getFullYear() === selectedDate.getFullYear()
        )

        let somaTotalSaidas = 0

        responseParsed.forEach((itemTransacao: TransactionOverride) => {
            somaTotalSaidas += Number(itemTransacao.preco)
        });

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
                const porcentagem = (categoriaSoma / somaTotalSaidas) * 100
                const porcentagemFormatted = porcentagem.toFixed(0) + "%"


                categoriasTemp.push({
                    categoriaKey: itemCategoria.key,
                    categoriaName: itemCategoria.name,
                    color: itemCategoria.color,
                    valorTotal: categoriaSoma,
                    valorTotalFormatted: categoriaSomaFormatted,
                    porcentagem: porcentagem,
                    porcentagemFormatted: porcentagemFormatted
                })
            }

        })

        setCategorias(categoriasTemp)
        setIsLoading(false)
    }

    useFocusEffect(useCallback(
        () => {
            loadData()
        },
        [selectedDate],
    ))

    if (isLoading)
        return (<AppLoading />)

    return (
        <Container>
            <Header>
                <Title>
                    Resumo por categoria
                </Title>
            </Header>
            <MonthSelect>
                <MonthSelectButton onPress={() => handleDateChange('prev')}>
                    <SelectIcon name="chevron-left" />
                </MonthSelectButton>

                <Month>
                    {format(selectedDate, 'MMMM,yyyy', { locale: ptBR })}
                </Month>

                <MonthSelectButton onPress={() => handleDateChange('next')}>
                    <SelectIcon name="chevron-right" />
                </MonthSelectButton>
            </MonthSelect>

            <GraphContainer>
                <VictoryPie
                    data={categorias}
                    x="porcentagemFormatted"
                    y="valorTotal"
                    style={{
                        labels: {
                            fontSize: 18,
                            fill: theme.colors.shape,
                            fontWeight: 'bold'
                        }
                    }}
                    animate={{
                        onExit: {
                            duration: 1000,
                            before: () => ({
                                _y: 0,
                            })
                        }
                    }}
                    width={300}
                    height={300}
                    labelRadius={50}
                    colorScale={categorias.map(itemCategoria => itemCategoria.color)}
                />
            </GraphContainer>
            <ContainerHistoryCard>
                <FlatList
                    style={{ flex: 1 }}
                    data={categorias}
                    keyExtractor={(item: CategoriaProps) => item.categoriaKey}
                    contentContainerStyle={{ paddingBottom: tabBarHeight }}
                    renderItem={({ item }: { item: CategoriaProps }) => (
                        <HistoryCard
                            title={item.categoriaName}
                            color={item.color}
                            preco={String(item.valorTotalFormatted)}
                        />
                    )}
                //onRefresh={() => loadData(true)}
                //refreshing={isLoading}
                />
            </ContainerHistoryCard>
        </Container >
    )
}
