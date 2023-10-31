import styled from "styled-components";
import Nav from "./Nav";

function Header() {
  return (
    <HeaderStyle>
      <h1 id="logo">
        <a href="/">logo</a>
      </h1>
      <Nav />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 80px;
  border-bottom: 1px solid #000;
  #logo {
    a {
      display: block;
      text-decoration: none;
      font-size: 30px;
      font-weight: 700;
      color: #000;
    }
  }
`;

export default Header;
