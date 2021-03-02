import styled from "styled-components";

import { Container } from "../../styles";

export const BoardContainer = styled(Container)`
  padding: 0;
  display: grid;
  grid-template-columns: 130px 1fr 240px;
  grid-template-rows: 30px 1fr 120px;
  grid-template-areas:
    "header header header"
    "sidebar main commandLines"
    "sidebar hand hand";
`;

export const Header = styled.div`
  grid-area: header;
`;

export const Relationships = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RelationshipWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Sidebar = styled.div`
  grid-area: sidebar;
  padding: 1em;
`;
