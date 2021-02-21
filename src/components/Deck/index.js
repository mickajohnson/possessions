import styled from "styled-components";

import FaceDownCard from "../FaceDownCard";

export default function Deck({ remainingCardCount, onDrawCard, isDrawable }) {
  const handleDrawCard = () => {
    if (isDrawable) {
      onDrawCard();
    }
  };
  return (
    <Container>
      <p>Deck</p>
      <FaceDownCard isDrawable={isDrawable} onDoubleClick={handleDrawCard} />
      Remaining: {remainingCardCount}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
