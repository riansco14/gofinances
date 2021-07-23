import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Container, Header, Title, Icon, Name, Category, Separator, Footer } from './styles'
import { categories } from '../../utils/categories'
import { Button } from '../../components/Forms/Button'



interface Category {
    key: string
    name: string
    icon: string
    color: string
}

interface Props {
    category: Category
    setCategory: (category: Category) => void
    closeSelectCategory: () => void
}

export function CategorySelect({ category, setCategory, closeSelectCategory }: Props) {
    const categoriesArr = categories as Category[]

    function handleCategory(category: Category) {
        setCategory(category)
    }

    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>

            <FlatList
                data={categoriesArr}
                style={{ flex: 1, width: '100%' }}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) =>
                    <Category
                        key={item.key}
                        onPress={() => handleCategory(item)}
                        isActive={category.key === item.key}
                    >
                        <Icon name={item.icon} />
                        <Name>{item.name}</Name>
                    </Category>}
                ItemSeparatorComponent={Separator}
            />

            <Footer>
                <Button title="Selecionar" onPress={closeSelectCategory} />
            </Footer>

        </Container>
    )
}
