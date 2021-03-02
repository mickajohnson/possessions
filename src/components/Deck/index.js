import styled from "styled-components";

export default function Deck({ remainingCardCount, onDrawCard, isDrawable }) {
  const handleDrawCard = () => {
    if (isDrawable) {
      onDrawCard();
    }
  };
  return (
    <Container isDrawable={isDrawable} onDoubleClick={handleDrawCard}>
      <p>Deck</p>
      Remaining: {remainingCardCount}
    </Container>
  );
}

const Container = styled.div`
  height: 120px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.salmon};
`;
