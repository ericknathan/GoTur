import styled from 'styled-components'

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 40px 0;
    
    .attractions {
        overflow-x:auto; 
        width: 1024px;
        height: 350px;
        display: flex;
        align-items: center;
        gap: 20px;
        cursor: grab;

        & * { user-select: none; }
    }
`

const StyledCard = styled.section`  
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

    img {
        object-fit: cover;
        width: 260px;
        height: 80%;
        border-radius: 10px;
    }

    p {
        font-weight: 500;
        display: flex;
        align-items: center;
    }
`

export { Main, StyledCard }
