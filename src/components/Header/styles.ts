import styled from 'styled-components';

const HeaderContainer = styled.header`
  max-height: 40vh;
  background-image: url('https://i.ibb.co/0MkX1ry/Group-1.png');
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 27px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;

  a {
    color: #fff;
  }
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
`;

const Profile = styled.div`

    img {
      width: 60px;
      height: 60px;
      border-radius: 50px;
      outline: 2px solid #fff;
      border: 2px solid transparent;
    }
`;

export { HeaderContainer, NavContainer, NavButtons, Logo, Profile };
