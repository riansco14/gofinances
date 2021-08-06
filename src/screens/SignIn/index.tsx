import React, { useState } from 'react'
import { Container, Header, TitleContainer, Title, SubTitle, Footer, FooterContainer } from './styles'

import AppleSvg from '../../assets/apple.svg'
import GoogleSvg from '../../assets/google-icon.svg'
import LogoSvg from '../../assets/logo.svg'
import { SignSocialButton } from '../../components/SignSocialButton'
import { useAuth } from '../../hooks/AuthContext'
import { ActivityIndicator, Alert } from 'react-native'
import theme from '../../global/styles/theme'

export function SignIn() {
    const { signInWithGoogle } = useAuth()
    const [isLoading, setIsLoading] = useState(false)



    async function handleSignInWithGoogle() {

        try {
            setIsLoading(true)
            return await signInWithGoogle()
        } catch (error) {
            console.log(error);
            Alert.alert("Não foi possivel conectar na conta google")
            setIsLoading(false)
        }

    }

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
                    <SignSocialButton
                        title="Entrar com Google"
                        icon={GoogleSvg} onPress={handleSignInWithGoogle} />
                    <SignSocialButton title="Entrar com Apple" icon={AppleSvg} />
                </FooterContainer>
                {isLoading && <ActivityIndicator color={theme.colors.primary} size="large" />}
            </Footer>




        </Container>
    )
}

