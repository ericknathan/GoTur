import { Header } from '../../components/Header'
import { Pack } from '../../components/Pack';

import { Container } from './styles';
import { database } from '../../services/firebase';

import { useEffect, useState } from 'react';

export function Inspiration() {
  const [packs, setPacks] = useState([]);
    
    useEffect(() => {
        database.ref('packs').once('value').then(index => setPacks(index.val()));
    }, []);

  return (
    <>
        <Header />
        <main>
            <Container>
                <div className="inspiration-packs">
                    <h1>Pacotes de Inspiração</h1>
                    <div className="packs">
                        {
                            packs.length > 0 ? packs.map((pack: any) => <Pack key={pack.name} pack={pack} />) : <p>Carregando pacotes...</p>
                        }
                    </div>
                </div>
            </Container>
        </main>
    </>
  )
}
