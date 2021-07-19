import React from 'react'
import { Button } from '../../components/Forms/Button'
import { Input } from '../../components/Forms/Input'
import { Container, Header, Title, FormContainer, FieldsContainer } from './styles'

export function Register() {
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <FormContainer>
                <FieldsContainer >
                    <Input placeholder="Nome"></Input>
                    <Input placeholder="Preço"></Input>
                </FieldsContainer>

                <Button title="Cadastro"></Button>
            </FormContainer>

        </Container>
    )
}
