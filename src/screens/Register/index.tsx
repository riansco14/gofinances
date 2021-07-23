import React, { useState } from 'react'
import { Alert, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native'
import { useForm } from 'react-hook-form'
import * as Yup from "yup";

import { Button } from '../../components/Forms/Button'
import { InputForm } from '../../components/Forms/InputForm'
import { Select } from '../../components/Forms/Select'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { CategorySelect } from '../CategorySelect'
import { Container, Header, Title, FormContainer, FieldsContainer, TransactionTypeContainer } from './styles'

import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
    nome: string
    preco: string
    transacaoTipo: string
    categoria: string
}

const schema = Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    preco: Yup.number().typeError('Informe um valor numerico').positive('O valor não pode ser negativo').required('O Valor é obrigatório'),
});

export function Register() {
    const [transactionType, setTransactionType] = useState('')
    const [category, setCategory] = useState({
        key: "",
        name: "",
        icon: "",
        color: ""
    })
    const [modalOpen, setModalOpen] = useState(false)

    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });


    function handleRegister(form: FormData) {
        if (!transactionType) {
            return Alert.alert("Selecione o tipo da transação")
        }

        if (category.key === "") {
            return Alert.alert("Selecione a categoria")
        }


        const data = {
            nome: form.nome,
            preco: form.preco,
            transacaoTipo: transactionType,
            categoria: category.name
        } as FormData

        console.log(data);

    }

    function handleTransactionsTypeSelect(type: "up" | "down") {
        setTransactionType(type)
    }

    function handleCloseModal() {
        setModalOpen(false)
    }

    function handleOpenModal() {
        setModalOpen(true)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <FormContainer>
                    <FieldsContainer >
                        <InputForm
                            control={control}
                            name="nome"
                            placeholder="Nome"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            error={errors.nome && errors.nome.message}
                        />

                        <InputForm
                            control={control}
                            name="preco"
                            placeholder="Preço"
                            keyboardType="numeric"
                            error={errors.preco && errors.preco.message}
                        />

                        <TransactionTypeContainer>
                            <TransactionTypeButton title="Income" type="down" isActive={transactionType === "down"} onPress={() => handleTransactionsTypeSelect("down")} />
                            <TransactionTypeButton title="Income" type="up" isActive={transactionType === "up"} onPress={() => handleTransactionsTypeSelect("up")} />
                        </TransactionTypeContainer>
                        <Select title={category.name.length <= 0 ? "Categoria" : category.name} onPress={handleOpenModal} />
                    </FieldsContainer>




                    <Button title="Cadastro" onPress={handleSubmit(handleRegister)}></Button>
                </FormContainer>

                <Modal visible={modalOpen}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseModal}

                    />
                </Modal>

            </Container>
        </TouchableWithoutFeedback>
    )
}
