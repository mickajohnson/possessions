import styled from "styled-components";

export default function FaceUpCard({ card, onDoubleClick, isPlayable }) {
  const handlePlayCard = () => {
    if (isPlayable) {
      onDoubleClick(card.id);
    }
  };

  return (
    <Container isPlayable={isPlayable} onDoubleClick={handlePlayCard}>
      {card.name}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  border: ${({ isPlayable }) =>
    isPlayable ? `1px solid var(--color-green)` : "none"};
  cursor: ${({ isPlayable }) => (isPlayable ? "pointer" : "cursor")}}
  display: flex;
  align-items: center;
  justify-content: center;
`;
