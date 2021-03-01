import styled from "styled-components";

import { Container } from "../../styles";

export const BoardContainer = styled(Container)``;

export const Relationships = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
  column-gap: 10px;
  row-gap: 5px;
`;

export const RelationshipWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
