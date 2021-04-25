import styled from "styled-components";

import { Container, FormButton, ApiErrorMessage } from "../../styles";

export { Container, ApiErrorMessage };

export const Button = styled(FormButton)`
  font-size: 28px;
  padding: 16px;
  margin-bottom: 18px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  height: fit-content;
  padding-top: 7%;
`;

export const Header = styled.h1`
  margin-bottom: 30px;
`;

export const MatchName = styled.h2`
  font-family: var(--font--seriff);
  text-align: center;
`;

export const Player = styled.p`
  font-size: 18px;
  margin-top: 16px;
  font-family: var(--font--seriff); ;
`;
