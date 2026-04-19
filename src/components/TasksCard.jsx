import { Card } from "@heroui/react";


function TasksCard({task}) {
    const {title, description} = task;
    return (
        <div>
            
            <Card className="w-[400px]">
                
                {title}
            </Card>
        </div>
    )
}

export default TasksCard
