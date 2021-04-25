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
  margin: auto;
  padding: 12px 90px;
`;

export const Content = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
`;

export const Directions = styled.h2`
  font-size: 1.1rem;
  font-family: var(--font--seriff);
  margin-bottom: 26px;
`;

export const FlavorText = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 7px;
`;

export const GoalsContainer = styled.div`
  align-items: center;
  display: flex;
  grid-gap: 15px;
  justify-content: center;
  margin: 0 0 48px;
`;
