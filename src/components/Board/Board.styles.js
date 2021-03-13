import styled from "styled-components";

import { Container } from "../../styles";

export const RoundTracker = styled.p`
  grid-area: roundTracker;
  padding: 10px;
  text-align: right;
`;

export const BoardContainer = styled(Container)`
  padding: 0;
  display: grid;
  grid-template-columns: 10% 1fr 25%;
  grid-template-rows: 48px 1fr 85px;
  grid-template-areas:
    "logo directions roundTracker"
    "sidebar main commandLines"
    "sidebar hand hand";
`;

export const SidebarHeading = styled.h3`
  font-size: 1em;
  text-align: center;
`;

export const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Sidebar = styled.div`
  grid-area: sidebar;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
