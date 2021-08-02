import React, { Context, createContext, ReactNode } from 'react'
import { useContext } from 'react'

export const AuthContext = createContext({} as AuthContextData)

interface AuthProviderProps {
    children: ReactNode
}
interface User {
    id: string
    name: string
    email: string
    image?: string
}
interface AuthContextData {
    user: User
}

function AuthProvider({ children }: AuthProviderProps) {
    const user = {
        id: '123',
        name: 'Rian Teste',
        email: 'riantal@gmail.com'
    }
    
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context
}


export { AuthProvider, useAuth }