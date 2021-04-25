import styled from "styled-components";

export const Message = styled.p`
  grid-area: directions;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-seriff);
  white-space: pre;
`;

export const PlayerName = styled.span`
  color: var(--color-redOrange);
  font-weight: 700;
`;

export const Your = styled.span`
  color: var(--color-green);
  font-weight: 700;
`;
