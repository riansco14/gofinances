import React, { useState } from 'react'
import { Button } from '../../components/Forms/Button'
import { Input } from '../../components/Forms/Input'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { Container, Header, Title, FormContainer, FieldsContainer, TransactionTypeContainer } from './styles'

export function Register() {
    const [transactionType, setTransactionType] = useState('')

    function handleTransactionsTypeSelect(type: "up" | "down") {
        setTransactionType(type)
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <FormContainer>
                <FieldsContainer >
                    <Input placeholder="Nome"></Input>
                    <Input placeholder="Preço"></Input>
                    <TransactionTypeContainer>
                        <TransactionTypeButton title="Income" type="down" isActive={transactionType==="down"} onPress={() => handleTransactionsTypeSelect("down")} />
                        <TransactionTypeButton title="Income" type="up" isActive={transactionType==="up"} onPress={() => handleTransactionsTypeSelect("up")} />
                    </TransactionTypeContainer>
                </FieldsContainer>


                <Button title="Cadastro"></Button>
            </FormContainer>

        </Container>
    )
}
