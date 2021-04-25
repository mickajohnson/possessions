import styled from "styled-components";

export const Container = styled.div`
  grid-area: commandLines;
  padding-right: 10px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr;
  height: 100%;
  padding-bottom: 2em;
`;

export const PlayerName = styled.p`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.redOrange : theme.colors.blue};
`;

export const CommandLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
