import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { Task } from './Task'

export const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    //タスクを並び替える
    const remove = taskList.splice(result.source.index,1);//[1,2,3]
    taskList.splice(result.destination.index, 0, remove[0]);
    
  }
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='dropapble'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task) => (
                <div key={task.id}>
                  <Task
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList} />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
