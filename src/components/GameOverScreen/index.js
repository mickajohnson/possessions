import { Container } from "./GameOverScreen.styles";

export default function GameOverScreen({ gameoverData, playerMetadata }) {
  console.log(gameoverData, playerMetadata);

  return (
    <Container>
      {/* <p>Winner: {playerMetadata[gameoverData.winner.id].name}</p> */}
    </Container>
  );
}
