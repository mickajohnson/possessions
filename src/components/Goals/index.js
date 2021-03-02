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
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const GoalCard = styled.div`
  height: 120px;
  width: 80px;
  font-size: 14px;
  background-color: white;
  boarder-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 10px;
`;
