import styled from "styled-components";

import FaceUpCard from "../FaceUpCard";

export default function Hand({ cards }) {
  return (
    <Container>
      {cards.map((card) => (
        <FaceUpCard key={card.id} name={card.name} value={card.value} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
