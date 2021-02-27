export default function OtherPlayerCommands({ G, playerID }) {
  return (
    <div>
      {G.players.map((player) =>
        player.id === playerID ? null : <div>{player.id}</div>
      )}
    </div>
  );
}
