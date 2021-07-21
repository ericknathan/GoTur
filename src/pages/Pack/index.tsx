import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { StyledModal } from '../../components/Modal'
import { Main, StyledCard } from './styles'

import { database } from '../../services/firebase'

import Modal from 'react-modal'

type Params = {
  name: string
}

type Destination = {
  name: string
  photo: string
}

export function Pack() {
  const params = useParams<Params>()
  const packName = params.name
  const history = useHistory()

  const [destinations, setDestinations] = useState<Destination[]>([])
  const [buyModalIsOppened, setBuyModalIsOppened] = useState(false)

  async function handleBuy() {
    setBuyModalIsOppened(false)
    history.push('/')
  }

  useEffect(() => {
    database
      .ref('packs')
      .once('value')
      .then(packs => {
        packs
          .val()
          .filter((pack: any) => pack.name === packName)[0]
          // eslint-disable-next-line array-callback-return
          ['destinations'].map((destination: any) => {
            database
              .ref(`destination/${destination}`)
              .once('value')
              .then(snap => {
                setDestinations(destinations => { return [
                  ...destinations,
                  {
                    name: destination,
                    photo: snap.val().photo
                  }
                ]})
              })
          })
      })
  }, [packName])

  return (
    <>
      <Header />
      <Main>
        <h1>Informações do pacote | {packName}</h1>
        <h2>Destinos inclusos:</h2>
        <div className="attractions">
          {destinations.length > 0 ? (
            destinations.map((destination: any) => (
              <StyledCard key={destination.name} onClick={() => history.push(`/destination/${destination.name}`)}>
                <h4>{destination.name}</h4>
                <img
                  src={destination.photo}
                  alt={`Imagem de ${destination.name}`}
                />
              </StyledCard>
            ))
          ) : (
            <p>Carregando pontos turísticos...</p>
          )}
        </div>
        <Button onClick={() => setBuyModalIsOppened(true)}>
          Fazer reserva
        </Button>
        <Modal
          isOpen={buyModalIsOppened}
          onRequestClose={() => setBuyModalIsOppened(false)}
          className="modal"
          overlayClassName="bg"
        >
          <StyledModal
            title={`Reserva de pacote | ${packName}`}
            acceptText="Confirmar compra"
            action={handleBuy}
            toggleAction={() => setBuyModalIsOppened(false)}
            type="close"
          >
            <form>
              <input type="text" required placeholder="Nome impresso" />
              <input type="text" required placeholder="Número do cartão" />
              <input type="date" required placeholder="Data de vencimento" />
              <input type="number" required placeholder="CCV" />
            </form>
          </StyledModal>
        </Modal>
      </Main>
    </>
  )
}
