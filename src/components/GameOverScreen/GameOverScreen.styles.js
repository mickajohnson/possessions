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
  justify-content: space-around;
  padding: 5px 0;
  font-family: var(--font-seriff);
`;

export const WinnerName = styled.span`
  font-family: var(--font-seriff);
  display: block;
  font-size: 2rem;
`;

export const WinnerHeading = styled.h1`
  text-align: center;
  padding-bottom: 20px;
  font-size: 2.5rem;
`;

export const SeriffText = styled.td`
  font-family: var(--font-seriff);
  text-align: center;
  font-weight: normal;
  font-size: 1.5rem;
`;

export const SansSeriffText = styled.td`
  font-family: var(--font-san-seriff);
  text-align: center;
  font-weight: normal;
  font-size: 1.6rem;
`;

export const LeaderBoard = styled.table`
  width: 70%;
  max-width: 700px;
`;

export const LeaderBoardRow = styled.tr`
  display: grid;
  grid-template-columns: 80px minmax(100px, 1fr) 300px 80px;
  align-items: center;
`;

export const LeaderBoardBodyRow = styled(LeaderBoardRow)`
  &:nth-child(2n) {
    background-color: #d7e4dd;
  }

  &:nth-child(2n + 1) {
    background-color: white;
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;

// Move colors to constants
export const LeaderBoardHeadingRow = styled(LeaderBoardRow)`
  background: #9bb8a7;
  padding: 2px 0 0 0;
  border-radius: 5px 5px 0 0;
`;

export const GoalScore = styled.p`
  padding-bottom: 5px;
`;
