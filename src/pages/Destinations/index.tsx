import { Header } from '../../components/Header';
import { City } from '../../components/City';

import { Container } from './styles';
import { database } from '../../services/firebase';

import { useEffect, useState } from 'react';

export function Destinations() {
  const [cities, setCities] = useState([]);
    
    useEffect(() => {
        database.ref('cities').once('value').then(index => setCities(index.val()));
    }, []);

  return (
    <>
        <Header />
        <main>
            <Container>
                <div className="avaliable-cities">
                    <h1>Destinos disponíveis</h1>
                    <div className="cities">
                        {
                            cities.length > 0 ? cities.map((city: string) => <City key={city} city={city} />) : <p>Carregando destinos...</p>
                        }
                    </div>
                </div>
            </Container>
        </main>
    </>
  )
}
