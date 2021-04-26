import styled from "styled-components";

import { Container } from "../../styles";

export const GameOverContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
  align-items: center;
`;

export const PlayerRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  width: 400px;
`;

export const GoalsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  font-family: var(--font-seriff);
`;

export const PlayerText = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: var(--font-seriff);
  font-size: 1.5rem;
  padding-bottom: 10px;
`;

export const Rank = styled.span`
  font-family: var(--font-sans-seriff);
`;

export const WinnerName = styled.span`
  font-family: var(--font-seriff);
  display: block;
`;

export const WinnerHeading = styled.h1`
  text-align: center;
  padding-bottom: 40px;
`;

export const LeaderBoard = styled.div``;

export const GoalScore = styled.p`
  padding-bottom: 5px;
`;
