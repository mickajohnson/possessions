import styled from "styled-components";

import { Container } from "../../styles";

export const BoardContainer = styled(Container)`
  padding: 0;
  display: grid;
  grid-template-columns: 130px 1fr 300px;
  grid-template-rows: 40px 1fr 150px;
  grid-template-areas:
    "header header header"
    "sidebar main commandLines"
    "sidebar hand hand";
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  padding: 5px 5px 0px 5px;
`;

export const Relationships = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
`;

export const SidebarHeading = styled.h3`
  font-size: 1em;
  text-align: center;
`;

export const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RelationshipWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Sidebar = styled.div`
  grid-area: sidebar;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.brown};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
