import styled from "styled-components";

export const Message = styled.p`
  grid-area: directions;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Domine";
  white-space: pre;
`;

export const PlayerName = styled.span`
  color: var(--color-redOrange);
`;

export const Your = styled.span`
  color: var(--color-green);
`;
