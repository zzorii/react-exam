import styled from "styled-components";

function Article() {
  return (
    <ArticleStyle>
      <h2>Title</h2>
      Hello, react!
    </ArticleStyle>
  );
}

const ArticleStyle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 300px;
  border: 1px solid #000;
  h2 {
    margin: 20px;
    font-size: 25px;
    font-weight: 500;
  }
`;

export default Article;
