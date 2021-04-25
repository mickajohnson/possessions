import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
`;

export const RelationshipWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  font-family: var(--font-seriff);
  font-size: 0.7rem;
`;

export const Score = styled.div`
  color: ${({ score, theme }) =>
    score > 0
      ? theme.colors.green
      : score < 0
      ? theme.colors.redOrange
      : "black"};
`;
