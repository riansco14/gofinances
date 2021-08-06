import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react'


import * as GoogleSignIn from 'expo-google-sign-in';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    signInWithGoogle(): Promise<void>
    signOutWithGoogle(): Promise<void>
}

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState({} as User)

    const userStorageKey = "@gofinances:user"

    const [userStorageLoading, setuserStorageLoading] = useState(true)

    async function signOutWithGoogle() {
        await GoogleSignIn.signOutAsync()
        setUser({} as User)
        await AsyncStorage.removeItem("@gofinances:user")
    }

    useEffect(() => {
        async function loadStorageDate() {

            const userStoraged = await AsyncStorage.getItem(userStorageKey)
            if (userStoraged) {
                const userLogged = JSON.parse(userStoraged) as User
                setUser(userLogged)
            }
            setuserStorageLoading(false)
        }
        loadStorageDate()
    }, [])

    async function signInWithGoogle() {
        try {
            const { type, user } = await GoogleSignIn.signInAsync();
            if (type === "success") {
                const userLogged = {
                    id: user?.uid,
                    email: user?.email,
                    name: user?.displayName,
                    image: user?.photoURL
                } as User

                setUser(userLogged)
                await AsyncStorage.setItem("@gofinances:user", JSON.stringify(userLogged))
                //await AsyncStorage.setItem()
                //console.log(user);
            }

        } catch ({ message }) {
            alert('GoogleSignIn.initAsync(): ' + message);
        }

    }


    //signInWithGoogle()

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, signOutWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context
}


export { AuthProvider, useAuth }