import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 55px;
  border-radius: 10px;
  background-color: ${({ positive }) =>
    positive ? "var(--color-lightGreen)" : "var(--color-negativePink)"};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1px;
  position: relative;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const DescriptionContainer = styled.div`
  background: white;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 50%;
  text-align: center;
`;

export const PeopleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

export const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;
`;

export const RedX = styled.p`
  color: var(--color-redOrange);
  font-family: var(--font-sans-seriff);
  font-size: 2rem;
`;

export const Score = styled.p`
  color: var(--color-green);
  font-family: var(--font-sans-seriff);
  font-size: 2rem;
`;

export const PersonPicture = styled.img`
  transform ${({ tiltLeft }) => (tiltLeft ? "rotate(-10deg)" : "rotate(10deg)")}
`;
