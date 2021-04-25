import styled from "styled-components";

export const Container = styled.main`
  font-family: var(--font-seriff);
  padding: 30px 100px;

  h1 {
    font-family: var(--font-sans-seriff);
  }

  h2 {
    color: var(--color-yellow);
    padding: 25px 0 10px;
    font-family: var(--font-sans-seriff);
  }

  p {
    line-height: 1.5;
    padding-bottom: 10px;
  }
`;

export const GoalImage = styled.img``;

export const GoalSelectionImage = styled.img`
  max-width: 600px;
  margin: auto;
  display: block;
  border: 1px solid black;
`;

export const BoardImage = styled.img`
  margin: auto;
  display: block;
  border: 1px solid black;
`;

export const InlineImageContainer = styled.div`
  display: flex;
`;
