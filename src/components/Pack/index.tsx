import { StyledPack } from './style';

type PackInfo = {
    name: string;
    photo: string;
}

type PackProps = {
    pack: PackInfo;
}

export function Pack(props: PackProps) {
    const image = props.pack.photo;
    
    let link = `/pack/${props.pack.name}`;
    return (
        <StyledPack href={link}>
            <img src={image} alt={`Pacote ${props.pack.name}`} />
            <p>Pacote {props.pack.name}</p>
        </StyledPack>
    )
}