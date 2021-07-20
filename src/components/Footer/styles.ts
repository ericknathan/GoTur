import styled from 'styled-components'

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 1rem 20vw;
    bottom: 0;

    background: ${props => props.theme.colors.primary};   
`

const Input = styled.input`
    display: block;
    min-width: 400px;
    height: 50px;
    border-radius: 15px;
    border: 0;
    padding: 1px 7px;
    width: 4rem;
    border: 1px solid #9a9a9a;
    background: #f8f8f8;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const LogoArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;

img {
    border-radius: 100%;
    width: 70px;
}
`

const Text = styled.p`
    color: #fff;
`

export {FooterContainer, Form, Input, LogoArea, Text}