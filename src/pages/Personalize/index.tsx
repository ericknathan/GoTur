import { FormEvent } from 'react'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import {
  PersonalizeContainer,
  Form,
  Title,
  Input,
  Label,
  BoxList
} from './styles'

export function Personalize() {
  const states = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'ES',
    'DF',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
  ]
  return (
    <>
      <Header />
      <PersonalizeContainer>
        <Form
          onSubmit={(e: FormEvent) => {
            e.preventDefault()
            alert('Em breve o pacote será enviado no seu e-mail!')
          }}
        >
          <Title>Preencha os dados para obter um pacote personalizado!</Title>
          <div>
            <Label>
              Nome:
              <Input type="text" placeholder="Insira seu Nome" required />
            </Label>
            <Label>
              E-mail:
              <Input type="email" placeholder="Insira seu e-mail" required />
            </Label>
            <Label>
              Telefone:
              <Input type="tel" placeholder="Insira seu telefone" required />
            </Label>
            <Label>
              Região:
              <BoxList name="region">
                {['Norte', 'Leste', 'Oeste', 'Sul'].map(item => {
                  return <option value={item}>{item}</option>
                })}
              </BoxList>
            </Label>
            <Label>
              Quando planeja viajar?
              <Input type="date" placeholder="Insira a data" required />
            </Label>
            <Label>
              Quantidade de viajantes:
              <Input
                type="number"
                placeholder="Insira a quantidade de viajantes"
                required
              />
            </Label>
            <Label>
              Orçamento:
              <Input
                type="number"
                placeholder="Insira seus gastos máximos"
                required
              />
            </Label>
            <Label>
              Ponto de partida:
              <BoxList name="region">
                {states.map(state => (
                  <option value={state}>{state}</option>
                ))}
              </BoxList>
            </Label>
          </div>
          <Button>Obter Pacotes Personalizados</Button>
        </Form>
      </PersonalizeContainer>
    </>
  )
}
