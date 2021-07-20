import styled from 'styled-components'

const PersonalizeContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #f2f2f2;
`

const Form = styled.form`
  width: min(70%, 1000px);
  margin-bottom: 1rem;

  div {
    width: min(400px, 100%);
    margin: auto;
  }

  button {
    display: block;
    margin: auto;
  }
`

const Title = styled.h1`
  margin: 1rem auto;
  font-size: 1.5rem;
  text-align: center;
`

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 1px 10px;
  height: 40px;
`

const BoxList = styled.select`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 1px 10px;
  height: 40px;
`

const Label = styled.label`
  font-weight: 500;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  margin-bottom: 5px;
  width: 100%;
`

export { PersonalizeContainer, Form, Input, BoxList, Label, Title }
