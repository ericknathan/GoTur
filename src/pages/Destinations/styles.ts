import styled from 'styled-components'

const Container = styled.div`
  padding: 40px 0;
  height: 60vh;

  .avaliable-cities {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .cities {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`

export { Container }
