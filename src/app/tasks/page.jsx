import TasksCard from "@/components/TasksCard";
import { getTasks } from "@/lib/tasks"


async function TasksPage() {
    const tasks =await getTasks();
    console.log(tasks);
    return (
        <div className="container mx-auto pt-10">
            <h1 className="text-3xl">Tasks {tasks.length}</h1>
            <div className="grid grid-cols-3 gap-4" >
            {
                tasks.map(taks => <TasksCard key={taks.id} task={taks} />)
            }
            </div>

        </div>
    )
}

export default TasksPage



