import * as Styled from "./FaceUpCard.styles";

export default function FaceUpCard({ card, onDoubleClick, isPlayable }) {
  const handlePlayCard = () => {
    if (isPlayable) {
      onDoubleClick(card.id);
    }
  };

  return (
    <Styled.Container isPlayable={isPlayable} onDoubleClick={handlePlayCard}>
      {card.name}
    </Styled.Container>
  );
}
