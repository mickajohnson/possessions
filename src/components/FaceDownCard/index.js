import styled from "styled-components";

export default function FaceDownCard({ onDoubleClick }) {
  return <Container onDoubleClick={onDoubleClick} />;
}

const Container = styled.div`
  height: 6em;
  width: 4em;
  border: 1px solid black;
`;
