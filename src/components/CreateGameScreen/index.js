import * as React from "react";

export default function CreateGameScreen({ handleCreateGame }) {
  const [name, setName] = React.useState("");
  const [numberOfPlayers, setNumberOfPlayers] = React.useState("2");

  const buttonDisabled = name.length === 0 || !numberOfPlayers;
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <select
        value={numberOfPlayers}
        onChange={(e) => setNumberOfPlayers(e.target.value)}
      >
        {[2, 3, 4].map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>

      <button
        disabled={buttonDisabled}
        onClick={() => handleCreateGame(name, numberOfPlayers)}
      >
        Create Game
      </button>
    </div>
  );
}
