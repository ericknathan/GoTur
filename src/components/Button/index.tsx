import { ReactNode } from 'react';
import { ButtonStyled } from './styles';

type ButtonProps = {
    children: ReactNode;
}


export function Button(props: ButtonProps) {
    return (
        <ButtonStyled>
            {props.children}
        </ButtonStyled>
    )
}