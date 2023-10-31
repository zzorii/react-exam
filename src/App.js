import Header from "./components/Header";
import Article from "./components/Article";
import { Reset } from "styled-reset";
import styled from "styled-components";

function App() {
  return (
    <>
      <Reset />
      <div className="root">
        <Header />
        <MainStyle className="main">
          <Article />
          <Article />
          <Article />
        </MainStyle>
      </div>
    </>
  );
}

const MainStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px;
  article {
    width: 30%;
  }
`;

export default App;
