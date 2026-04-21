import { revalidatePath } from "next/cache";
import { postTasks } from "./tasks";


export const createATask = async (formData) => {
    'use server'
    
    const newTask = Object.fromEntries(formData.entries())
    console.log('newTask', newTask);
    const res = await postTasks(newTask);
    if(res.ok){
        revalidatePath('/tasks');
    } 
    return res
    
}