import React from 'react'
import { Button, Title, IconContainer } from './styles'

import GoogleSvg from '../../assets/google-icon.svg'
import { RectButtonProps } from 'react-native-gesture-handler'
import Svg, { SvgProps } from 'react-native-svg'

interface Props extends RectButtonProps {
    title: string
    icon: React.FC<SvgProps>
}

export function SignSocialButton({ title, icon: Svg, ...rest }: Props) {
    return (
        <Button {...rest}>
            <IconContainer>
                <Svg />
            </IconContainer>
            <Title>
               {title} 
            </Title>

        </Button>
    )
}
