import { revalidatePath } from "next/cache";
import { postTasks } from "./tasks";
import { redirect } from "next/navigation";


export const createATask = async (formData) => {
    'use server'
    
    const newTask = Object.fromEntries(formData.entries());
    const res = await postTasks(newTask);
    if(res.ok){
        revalidatePath('/tasks');
    } 
    return res
    
}
export const newTaksAction = async (formData) => {
    'use server'
    const newTask = Object.fromEntries(formData.entries());
    console.log(newTask);
    const res = await postTasks(newTask);
    if(res.ok){
        revalidatePath('/tasks');
        redirect('/tasks');
    }
    return res
   
}