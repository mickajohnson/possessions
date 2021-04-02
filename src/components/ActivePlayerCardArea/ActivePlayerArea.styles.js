import styled from "styled-components";

export const CardContainer = styled.div`
  height: 120px;
  width: 80px;
  background-color: white;
  border-radius: 6px;
  margin-right: 10px;
`;

export const Deck = styled.div`
  height: 110px;
  width: 80px;
  background-color: white;
  margin-right: 10px;
  position: relative;
`;

export const DeckImage = styled.img`
  height: 110px;
  width: 80px;
`;

export const Hand = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  grid-area: hand;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;

export const Remaining = styled.p`
  color: white;
  font-size: 1.5rem;
  position: absolute;
  top: 3px;
  left: 7px;
`;
