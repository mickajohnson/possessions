import styled from "styled-components";

import FaceUpCard from "../FaceUpCard";

export default function Hand({ cards, onPlayCard, isPlayable }) {
  return (
    <Container>
      {cards.map((card) => (
        <FaceUpCard
          isPlayable={isPlayable}
          onDoubleClick={onPlayCard}
          key={card.id}
          card={card}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
`;
