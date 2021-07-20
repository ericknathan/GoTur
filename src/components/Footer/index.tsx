import Logo from '../../assets/images/logo.svg'

import {FooterContainer, Form, Input, LogoArea, Text} from './styles'

export function Footer() {
    return (
        <FooterContainer>
            <Form>
                <Text>Para saber mais:</Text>
                <Input type="text" placeholder="Nome" />
                <Input type="text" placeholder="Telefone" />  
                <Input type="email" placeholder="E-mail" />  
            </Form>
            <LogoArea>
                <Text>Acesse:</Text>
                <img src={Logo} alt="GoTur" />
            </LogoArea>
        </FooterContainer>
    )
} 