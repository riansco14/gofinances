import React from 'react'
import { Container, Header, TitleContainer, Title, SubTitle, Footer, FooterContainer } from './styles'

import AppleSvg from '../../assets/apple.svg'
import GoogleSvg from '../../assets/google-icon.svg'
import LogoSvg from '../../assets/logo.svg'
import { SignSocialButton } from '../../components/SignSocialButton'
import { AuthContext, useAuth } from '../../hooks/AuthContext'

export function SignIn() {
    const data = useAuth()
    console.log(data);
    
    return (
        <Container>
            <Header>
                <TitleContainer>
                    <LogoSvg height={68} width={120} />
                    <Title>
                        Controle suas{'\n'}
                        finanças de forma{'\n'}
                        muito simples
                    </Title>
                </TitleContainer>

                <SubTitle>
                    Faça seu login com {'\n'}
                    uma das contas abaixo
                </SubTitle>
            </Header>

            <Footer>
                <FooterContainer>
                    <SignSocialButton title="Entrar com Google" icon={GoogleSvg} />
                    <SignSocialButton title="Entrar com Apple" icon={AppleSvg} />
                </FooterContainer>
            </Footer>



        </Container>
    )
}

