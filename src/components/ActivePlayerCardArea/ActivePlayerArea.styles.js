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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: ${({ isDrawable }) =>
    isDrawable ? "1px solid var(--color-green)" : ""}}
  cursor: ${({ isDrawable }) => (isDrawable ? "pointer" : "cursor")}}
  margin-right: 10px;
  border-radius: 10px;
  background-image: url(/card_back.png);  
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;  
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
