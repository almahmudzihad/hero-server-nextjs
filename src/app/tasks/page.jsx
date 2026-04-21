import { AddTasks } from "@/components/AddTasks";
import TasksCard from "@/components/TasksCard";
import { createATask } from "@/lib/action";
import { getTasks } from "@/lib/tasks"


async function TasksPage() {
    const tasks =await getTasks();
    
    return (
        <div className="container mx-auto pt-10 text-center space-y-4">
            <h1 className="text-3xl">All Tasks {tasks.length}</h1>
            <AddTasks createATask={createATask} />
            <div className="grid grid-cols-3 gap-4" >
            {
                tasks.map(taks => <TasksCard key={taks.id} task={taks} />)
            }
            </div>

        </div>
    )
}

export default TasksPage



