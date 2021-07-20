import logo from '../../assets/images/logo.svg';

import { Input } from '../../components/Input';

import {HeaderContainer, NavContainer, NavButtons, Logo, Profile} from './styles'

import { useAuth } from '../../hooks/useAuth';

import { Button } from '../Button';

type HeaderProps = {
    showSearch?: boolean
}

export function Header({showSearch = false}: HeaderProps) {
    const { user, signInWithGoogle } = useAuth();
    return (
        <HeaderContainer>
            <NavContainer>
                <Logo src={logo} alt="Logo GoTur" />
                <NavButtons>
                    <a href="/">Início</a>
                    <a href="/destinations">Destinos</a>
                    <a href="/inspirations">Inspirações</a>
                    <a href="/personalize">Personalização</a>
                </NavButtons>
                <Profile>
                    {
                        !user ? (
                            <Button onClick={signInWithGoogle}>Entrar</Button>
                        ) : (
                            <Profile>
                                <a href="/">
                                    <img src={user.avatar} alt="Imagem de usuário" referrerPolicy="no-referrer"/>
                                </a>
                            </Profile>
                        )
                    }
                </Profile>
            </NavContainer>
            {
                showSearch && (
                    <>
                        <Input placeholder="Busque por um destino"/>
                        <Button>Quero conhecer!</Button>
                    </>
                )
            }
        </HeaderContainer>
    )
}