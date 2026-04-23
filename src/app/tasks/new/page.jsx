
import { newTaksAction} from "@/lib/action";

import { Button, Input, Label, ListBox, TextField, Select, Form } from "@heroui/react";


const NewTask = () => {
  return (
    <div className="w-1/4 mx-auto pt-10">
      <h1 className="text-3xl font-bold underline mb-4 text-center">New Task</h1>
      <Form action={newTaksAction} className="flex flex-col gap-4">
        <TextField isRequired className="w-full" name="title" type="text">
          <Label>Title req</Label>
          <Input placeholder="Enter your Task title" />
        </TextField>
        <TextField className="w-full" name="description" type="text">
          <Label>Description</Label>
          <Input placeholder="Enter your description" />
        </TextField>
        <Select name="priority" className="" placeholder="Select one">
          <Label>Priority</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="low" textValue="low">
                Low
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="medium" textValue="medium">
                Medium
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="high" textValue="high">
                High
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        <Select name="status" className="" placeholder="Select one">
          <Label>Status</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="pending" textValue="Pending">
                Pending
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="progress" textValue="Progress">
                Progress
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="completed" textValue="Completed">
                Completed
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <TextField className="w-full" name="assignedTo">
          <Label>Assigned To</Label>
          <Input placeholder="Assigned to" />
        </TextField>
       
          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button type="submit">
            Submit Task
          </Button>
        
      </Form>
    </div>
  );
};

export default NewTask;
