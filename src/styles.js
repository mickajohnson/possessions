import styled, { createGlobalStyle } from "styled-components";

import theme from "./theme";

export const Container = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const FlavorText = styled.h1`
  font-family: var(--font--sans-seriff);
  font-size: 1.7em;
  margin-bottom: 1em;
  text-align: left;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: none;
  margin-bottom: 1em;
  width: 100%;
  padding: 1em;
  font-family: var(--font-seriff);
  font-size: 1.3em;
  outline-color: black;
`;

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  background-color: var(--color-blue);
  border: none;
  padding: 0.8em;
  border-radius: 5px;
  font-family: var(--font--sans-seriff);
  font-size: 1.4em;
  outline-color: black;
`;

export const FormButton = styled(Button)`
  margin-top: 1.5em;
  background-color: var(--color-green);
  color: white;
  outline-color: black;

  &:disabled {
    background-color: var(--color-redOrange);
    color: var(--color-pink);
    cursor: not-allowed;
  }
`;

export const Select = styled.select`
  margin-bottom: 3em;
  border-radius: 5px;
  border: none;
  padding: 1em;
  cursor: pointer;
  width: 100%;
  font-family: var(--font--seriff);
  font-size: 1.3em;
  color: ${({ value }) => (value === "" ? "grey" : "black")};
  appearance: none;
  margin-bottom: 1em;
  outline-color: black;
`;

export const SplitContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  height: 100vh;
  width: 100vw;
`;

export const Label = styled.label`
  width: 100%;
  font-size: 2em;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  height: fit-content;
  grid-column: 2;
  padding: 20% 3em;
`;

export const ApiErrorMessage = styled.p`
  color: var(--color-redOrange);
  text-align: center;
  margin-top: 1em;
  font-size: 1.3em;
`;

export const PinkSpace = styled.div`
  background-color: var(--color-pink);
  height: 100%;
  width: 100%;
`;

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-lightGreen: ${theme.colors.lightGreen};
    --color-background: ${theme.colors.background};
    --color-redOrange: ${theme.colors.redOrange};
    --color-blue: ${theme.colors.blue};
    --color-yellow: ${theme.colors.yellow};
    --color-brown: ${theme.colors.brown};
    --color-salmon: ${theme.colors.salmon};
    --color-grey: ${theme.colors.grey};
    --color-green: ${theme.colors.green};
    --color-pink: ${theme.colors.pink};
    --color-negativePink: ${theme.colors.negativePink};

    --font-seriff: "Domine", seriff;
    --font-sans-seriff:"Staatliches", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }

  body {
    margin: 0;
    font-family: "Staatliches", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: var(--color-background);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
