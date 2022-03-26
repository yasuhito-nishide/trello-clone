import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { Task } from './Task'

export const Tasks = ({taskList, setTaskList }) => {
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId='dropapble'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
            {taskList.map((task) =>(
              <div>
                <Task task={task} taskList={taskList} setTaskList={setTaskList}/>
              </div>
            ))}
            </div>
          )} 
        </Droppable>
      </DragDropContext>
    </div>
  );
};
