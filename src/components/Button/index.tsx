import { ReactNode, ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
};

export function Button({children, ...props}: ButtonProps) {
    return (
        <ButtonStyled {...props}>
            {children}
        </ButtonStyled>
    )
}