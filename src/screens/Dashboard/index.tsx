import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import { Container, Header, Icon, Image, User, UserContainer, UserHello, UserInfo, UserName, HighlightCardScroll } from './styles'

export function Dashboard() {
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
        </Container>
    )
}


