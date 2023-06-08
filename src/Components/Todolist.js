import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleCompleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.completed ? <del>{task.name}</del> : task.name}
            {!task.completed && (
              <button onClick={() => handleCompleteTask(index)}>Complete</button>
            )}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask({ name: e.target.elements.task.value, completed: false });
          e.target.reset();
        }}
      >
        <input type="text" name="task" placeholder="Add a new task" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoList;
