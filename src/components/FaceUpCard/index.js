import styled from "styled-components";

export default function FaceUpCard({ name, value }) {
  return <Container>{name}</Container>;
}

const Container = styled.div`
  height: 6em;
  width: 4em;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
