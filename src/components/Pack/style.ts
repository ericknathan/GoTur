import styled from 'styled-components';

const StyledPack = styled.a`

    &:hover {
        transform: scale(1.05);
    }

    width: 280px;
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px;
    background-color: #fff;
    color: #2A2A2A;
    border-radius: 15px;
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.15);

    transition: all 0.3s ease;
    cursor: pointer;

    img {
        object-fit: cover;
        width: 260px;
        height: 80%;
        border-radius: 10px;
    }

    p {
        font-weight: 500;
        height: 20%;
        display: flex;
        align-items: center;
    }
`;

export { StyledPack };