import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const FlavorText = styled.h1`
  font-family: "Staatliches";
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
  font-family: "Domine", seriff;
  font-size: 1.3em;
`;

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  padding: 0.8em;
  border-radius: 5px;
  font-family: "Staatliches";
  font-size: 1.4em;
  outline-color: black;
`;

export const FormButton = styled(Button)`
  margin-top: 1.5em;
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  outline-color: black;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.redOrange};
    color: ${({ theme }) => theme.colors.pink};
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
  font-family: "Domine", seriff;
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
  color: ${({ theme }) => theme.colors.redOrange};
  text-align: center;
  margin-top: 1em;
  font-size: 1.3em;
`;

export const PinkSpace = styled.div`
  background-color: ${({ theme }) => theme.colors.pink};
  height: 100%;
  width: 100%;
`;

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-green: #518967;
    --color-background: #EDE4D8;
    --color-redOrange: #F45F31;
    --color-blue: #77A5A4;
    --color-yellow: #D39805;
    --color-brown: #C0AC92;
    --color-salmon: #FFBEA6;
    --color-grey: #C4C4C4;
    --color-green: #518967;
    --color-pink: #FFBEA6;
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
