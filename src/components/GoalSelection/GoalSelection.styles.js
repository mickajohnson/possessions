import styled from "styled-components";

import { Container, Button } from "../../styles";

export const GoalSelectionContainer = styled(Container)`
  padding: 5px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.div`
  height: 40px;
  width: 100%;
`;

export const RemoveButton = styled(Button)`
  width: fit-content;
  margin-left: auto;
`;

export const Content = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

export const Directions = styled.h2`
  font-size: 1.2em;
`;

export const GoalsContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  justify-content: center;
  margin: 15px 0;
`;

export const GoalCard = styled.div`
  height: 12em;
  width: 8em;
  border-radius: 6px;
  background-color: white;
  border: ${({ selected }) => (selected ? "1px solid blue" : "none")};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
