import styled from 'styled-components'

const StyledCity = styled.a`
  &:hover {
    transform: scale(1.025);
  }

  display: block;
  width: min(100%, 800px);
  height: 300px;

  display: flex;
  gap: 1rem;
  align-items: center;

  padding: 1rem 10px;
  background-color: #fff;
  color: #2a2a2a;
  border-radius: 15px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.15);

  transition: all 0.3s ease;
  cursor: pointer;

  img {
    object-fit: cover;
    height: 100%;
    width: min(50%, ${800*0.4}px);
    border-radius: 10px;
  }

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      font-size: 1.25rem;
    }
  }
`

export { StyledCity }
