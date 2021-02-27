import * as React from "react";

export default function JoinScreen({ onJoin, lobbyClient }) {
  const [name, setName] = React.useState("");
  const [matchID, setMatchID] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleGetMatch = async () => {
    return await lobbyClient.getMatch("nightstand-stuff", matchID);
  };

  const handleJoin = async () => {
    try {
      const match = await handleGetMatch();

      const emptySeat = match.players.find((player) => !player.name);

      onJoin({
        playerId: String(emptySeat.id),
        playerName: name,
        matchId: match.matchID,
      });
    } catch {
      setMessage("match not found");
      setMatchID("");
    }
  };

  return (
    <div>
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        match id
        <input value={matchID} onChange={(e) => setMatchID(e.target.value)} />
      </label>
      <button
        onClick={handleJoin}
        disabled={name.length < 1 || matchID.length < 1}
      >
        Submit
      </button>
      <p>{message}</p>
    </div>
  );
}
