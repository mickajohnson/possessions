import * as React from "react";

export default function JoinScreen({ onJoin, getMatch }) {
  const [name, setName] = React.useState("");
  const [matchID, setMatchID] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleJoin = async () => {
    // try {
    const match = await getMatch("nightstand-stuff", matchID);

    const emptySeat = match.players.find((player) => !player.name);

    onJoin(emptySeat.playerID, name, match.matchID);
    // } catch {
    //   setMessage("match not found");
    //   setMatchID("");
    // }
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
