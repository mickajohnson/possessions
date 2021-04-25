import styled from "styled-components";

import { Container } from "../../styles";

export const GameOverContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
`;

export const Relationships = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
`;

export const RelationshipWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const GoalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlayerRow = styled.div`
  display: flex;
  margin-bottom: 25px;
  width: 75%;
`;

export const GoalsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const GoalCard = styled.div`
  height: 120px;
  width: 80px;
  font-size: 14px;
  background-color: white;
  boarder-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 10px;
`;
