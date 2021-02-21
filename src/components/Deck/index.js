import styled from "styled-components";

import FaceDownCard from "../FaceDownCard";

export default function Deck({ remainingCardCount }) {
  return (
    <Container>
      <p>Deck</p>
      <FaceDownCard />
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
