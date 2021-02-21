import styled from "styled-components";

import FaceUpCard from "../FaceUpCard";

export default function Hand({ cards }) {
  return (
    <Container>
      {cards.map((card) => (
        <FaceUpCard key={card.id} card={card} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
`;
