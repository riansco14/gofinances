import React from 'react'
import { Container, Header, Icon, Image, User, UserContainer, UserHello, UserInfo, UserName } from './styles'

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
        </Container>
    )
}


