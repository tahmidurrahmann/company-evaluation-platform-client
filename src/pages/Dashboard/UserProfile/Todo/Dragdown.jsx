import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { initialData } from '../Userdatalist/UserData';

const Dasboard = () => {
    const [task, setTasks] = useState(initialData);

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) return; // dropped outside the droppable area

        const updatedTasks = { ...task };

        // Remove the task from the source column
        const sourceTasks = [...updatedTasks[source.droppableId]];
        const [movedTask] = sourceTasks.splice(source.index, 1);

        // Add the task to the destination column
        const destinationTasks = [...updatedTasks[destination.droppableId]];
        destinationTasks.splice(destination.index, 0, movedTask);

        // Update the state with the new arrays
        setTasks({
            ...updatedTasks,
            [source.droppableId]: sourceTasks,
            [destination.droppableId]: destinationTasks,
        });
    };

    console.log(Object.keys(task));

    Object.keys(task).map((column) => (
        console.log(column.charAt(0).toUpperCase() + column.slice(1)),
        task[column].map((task, index) => (
            console.log(task)
        ))
    ));



    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="board flex flex-col md:flex-row gap-6 justify-around w-full bg-blue-gray-800 ">
                {Object.keys(task).map((column) => (
                    <Droppable key={column} droppableId={column}>
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className="column bg-red-300"
                            >

                                <h2 className='text-center font-bold text-xl'>{column.charAt(0).toUpperCase() + column.slice(1)}</h2>

                                {
                                    task[column].map((task, index) => (
                                        <Draggable key={task.id} draggableId={task.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                    className="task  border  p-4 m-2 bg-black text-white"
                                                >
                                                    <div className='bg-yellow-400 p-5'>
                                                        <h3>{task.content.title}</h3>
                                                        <p>{task.content.description}</p>
                                                        <p>Time: {task.content.time}</p>
                                                        <p>Priority: {task.content.priority}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>

                                    ))}


                                {provided.placeholder}

                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
};

export default Dasboard;