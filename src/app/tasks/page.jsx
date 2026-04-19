import { getTasks } from "@/lib/tasks"


const TasksPage = async  () =>{
    const tasks = await getTasks()

    return (
        <div className="container mx-auto pt-10">
            <h1>Tasks Page {tasks.length}</h1>
            
        </div>
    )
        
}

export default TasksPage
