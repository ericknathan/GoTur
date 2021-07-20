import styled from 'styled-components';

const Container = styled.div`

    padding: 40px 0;
    height: 60vh;

    .inspiration-packs {

        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    
    .packs {
        display: flex;
        gap: 20px;
    }
`;

export { Container };