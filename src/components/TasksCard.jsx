import { Card } from "@heroui/react";

function TasksCard({ task }) {
  const { title, description, status } = task;
  return (
    <div>
      <Card className="" variant="tertiary">
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Status: {status}</p>
        </Card.Content>
      </Card>
    </div>
  );
}

export default TasksCard;
