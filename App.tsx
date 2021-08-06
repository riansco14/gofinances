import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import 'react-native-gesture-handler';

import theme from './src/global/styles/theme';

import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';

import { StatusBar } from 'react-native';
import { AuthProvider } from './src/hooks/AuthContext';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />

        <AuthProvider>
          <Routes/>
        </AuthProvider>

    </ThemeProvider>
  );
}