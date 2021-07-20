import styled from 'styled-components';

const Container = styled.div`

    padding: 40px 0;
    display: flex;
    flex-direction: column;
    /* height: 60vh; */

    .personalizated-packs {

        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }
    .packs {
        display: flex;
        gap: 20px;
    }
`;

export { Container };