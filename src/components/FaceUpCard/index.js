import styled from "styled-components";

export default function FaceUpCard({ card, onDoubleClick, isPlayable }) {
  const handlePlayCard = () => {
    if (isPlayable) {
      onDoubleClick(card.id);
    }
  };

  const borderColor = isPlayable ? "blue" : "black";

  return (
    <Container borderColor={borderColor} onDoubleClick={handlePlayCard}>
      {card.name}
    </Container>
  );
}

const Container = styled.div`
  height: 6em;
  width: 4em;
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
