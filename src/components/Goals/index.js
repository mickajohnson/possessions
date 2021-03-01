import styled from "styled-components";

export default function Goals({ goals }) {
  return (
    <GoalsContainer>
      {goals.map((goal) => (
        <GoalCard key={goal.id}>
          <span>{goal.name}</span>
          <span>{goal.polarity}</span>
          <span>{goal.description}</span>
        </GoalCard>
      ))}
    </GoalsContainer>
  );
}

const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: space-around;
`;

const GoalCard = styled.div`
  height: 10em;
  width: 6em;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
