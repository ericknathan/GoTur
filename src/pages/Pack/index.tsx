import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';

type Params = {
    name: string;
}

export function Pack() {
    const params = useParams<Params>();
    const packName = params.name;
    return (
        <>
            <Header />
            <main>
                <h1>Informações do pacote | {packName}</h1>
            </main>
        </>
    )
}