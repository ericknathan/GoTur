import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Pack } from '../../components/Pack';

import { Container } from './styles';

import { database } from '../../services/firebase';

import { useEffect, useState } from 'react';


export function Home() {
    const [packs, setPacks] = useState([]);
    
    useEffect(() => {
        database.ref('packs').once('value').then(index => setPacks(index.val()));
    }, []);
    
    return (
        <div>
            <Header showSearch={true}/>
            <main>
                <Container>
                    <div className="personalizated-packs">
                        <h1>Explore as belezas naturais e locais turísticos em GO</h1>
                        <div className="packs">
                            {
                                packs.length > 0 ? packs.map((pack: any) => <Pack key={pack.name} pack={pack} />) : <p>Carregando pacotes...</p>
                            }
                        </div>
                            
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
}