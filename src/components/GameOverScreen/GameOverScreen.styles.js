import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container } from "../../styles";

export const PlayAgainButton = styled(Link)`
  background-color: var(--color-green);
  width: 200px;
  margin-bottom: 40px;
  cursor: pointer;
  border: none;
  padding: 0.8em;
  border-radius: 5px;
  font-family: var(--font-sans-seriff);
  font-size: 1.4em;
  outline-color: black;
  color: white;
  text-align: center;
`;

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

export const GoalsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  font-family: var(--font-seriff);
`;

export const WinnerName = styled.span`
  font-family: var(--font-seriff);
  display: block;
`;

export const WinnerHeading = styled.h1`
  text-align: center;
  padding-bottom: 20px;
`;

export const LeaderBoardHeading = styled.th``;

export const Rank = styled.td``;

export const Name = styled.td`
  font-family: var(--font-seriff);
`;

export const Goals = styled.td``;

export const Score = styled.td`
  font-family: var(--font-seriff);
  text-align: center;
`;

export const LeaderBoard = styled.table`
  width: 50%;
  max-width: 500px;
`;

export const LeaderBoardRow = styled.tr`
  display: grid;
  grid-template-columns: 50px minmax(70px, 1fr) 300px 50px;
`;

export const GoalScore = styled.p`
  padding-bottom: 5px;
`;
