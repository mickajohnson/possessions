import styled from "styled-components";

import Room from "../Room";

export default function House({ G }) {
  const { roomOrder } = G;

  return (
    <HouseContainer>
      {roomOrder.map((roomKey) => (
        <Room key={roomKey} roomKey={roomKey} G={G} />
      ))}
    </HouseContainer>
  );
}

const HouseContainer = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
`;
