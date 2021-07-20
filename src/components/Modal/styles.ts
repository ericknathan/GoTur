import styled from 'styled-components';

const Modal = styled.div`
    background-color: white;
    width: 590px;
    height: 560px;
    border-radius: 8px;
    padding: 64px 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 10;

    h2 {
        color: #29292E;
        font: 700 24px 'Poppins', sans-serif;
        text-align: center;
    }
    span {
        color: #737380;
        font-family: normal 16px 'Roboto', sans-serif;
    }

    .buttons {
        display: flex;
        gap: 8px;
        margin-top: 20px;
    }
`;

export { Modal }