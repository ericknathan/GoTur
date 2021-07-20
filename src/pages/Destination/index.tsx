import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { StyledModal } from '../../components/Modal';
import { Main, StyledCard } from './styles'

import { database } from '../../services/firebase';

import Modal from 'react-modal';

type Params = {
    name: string;
}

export function Destination() {
    const params = useParams<Params>();
    const destinationName = params.name;
    const history = useHistory();

    const [touristicAttractions, setTouristicAttractions] = useState([]);
    const [buyModalIsOppened, setBuyModalIsOppened] = useState(false);

    async function handleBuy() {
        setBuyModalIsOppened(false);
        history.push('/');
    }

    useEffect(() => {
        database.ref(`destination/${destinationName}/touristic_attractions`).once('value').then(index => {
            setTouristicAttractions(index.val())
        });
    }, [destinationName]);

    return (
        <>
            <Header />
            <Main>
                <h1>Informações do destino | {destinationName}</h1>
                <h2>Pontos turísticos inclusos:</h2>
                <div className="attractions">
                    {
                        touristicAttractions ? touristicAttractions.map((attraction: any) => (
                            <StyledCard>
                                <img src={attraction.photos[0]} alt={`Imagem de ${attraction.name}`} />
                                <div>
                                    <h4>{attraction.name}</h4>
                                    <p>
                                        <strong>Tipo: </strong> {attraction.type}{/* águas termais */}
                                    </p>
                                </div>
                                
                            </StyledCard>
                        )) : <p>Carregando pontos turísticos...</p>
                    }
                </div>
                <Button onClick={() => setBuyModalIsOppened(true)}>Fazer reserva</Button>
                <Modal
                    isOpen={buyModalIsOppened}
                    onRequestClose={() => setBuyModalIsOppened(false)}
                    className="modal"
                    overlayClassName="bg"
                >
                    <StyledModal
                        title={`Reserva de destino | ${destinationName}`}
                        acceptText="Confirmar compra"
                        action={handleBuy}
                        toggleAction={() => setBuyModalIsOppened(false)}
                        type="close"
                    >
                        <form>
                            <input type="text" required placeholder="Nome impresso"/>
                            <input type="text" required placeholder="Número do cartão"/>
                            <input type="date" required placeholder="Data de vencimento"/>
                            <input type="number" required placeholder="CCV"/>
                        </form>
                    </StyledModal>
                </Modal>
            </Main>
        </>
    );
}