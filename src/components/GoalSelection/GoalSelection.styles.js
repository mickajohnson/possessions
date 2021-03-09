import styled from "styled-components";

import { Container, FormButton } from "../../styles";

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

export const RemoveButton = styled(FormButton)`
  width: fit-content;
  margin-top: 2em;
  margin: auto;
  padding: 0.5em 4em;
`;

export const Content = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
`;

export const Directions = styled.h2`
  font-size: 1.1em;
  font-family: "Domine", seriff;
  margin-bottom: 1.5em;
`;

export const FlavorText = styled.h1`
  font-size: 1.5em;
  margin-bottom: 0.3em;
`;

export const GoalsContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  justify-content: center;
  margin: 0 0 3em;
`;

export const GoalCard = styled.div`
  height: 15em;
  width: 11em;
  border-radius: 10px;
  background-color: white;
  border: ${({ selected }) => (selected ? "1px solid blue" : "none")};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
