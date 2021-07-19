import logo from '../../assets/images/logo.svg';

import {HeaderContainer, NavContainer, Logo, Profile} from './styles'

import { useAuth } from '../../hooks/useAuth';

import { Button } from '../Button';

export function Header() {
    const { user } = useAuth();
    return (
        <HeaderContainer>
            <NavContainer>
                <Logo src={logo} alt="Logo GoTur" />
                <div className="navigation-buttons">
                    <a href="/">Início</a>
                    <a href="/">Destinos</a>
                    <a href="/">Pacotes +</a>
                </div>
                <Profile>
                    {
                        !user ? (
                            <Button>Entrar</Button>
                        ) : (
                            <div className="profile">
                                <a href="/">
                                    <i className="fas fa-bars"></i>
                                    <img src={user?.avatar} alt="Imagem de usuário" />
                                </a>
                            </div>
                        )
                    }
                </Profile>
            </NavContainer>
        </HeaderContainer>
    )
}