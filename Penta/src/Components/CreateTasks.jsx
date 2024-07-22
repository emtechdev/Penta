import React, { useState, useEffect } from 'react';

function CreateTasks() {
  const [num, setNum] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
    setNum(savedTasks.length);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleNumChange = (e) => {
    const newNum = parseInt(e.target.value, 10);
    setNum(newNum);
    if (newNum < tasks.length) {
      setTasks(tasks.slice(0, newNum));
    } else {
      setTasks([...tasks, ...Array(newNum - tasks.length).fill({ name: '', image: '' })]);
    }
  };

  const handleTaskChange = (index, field, value) => {
    const newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], [field]: value };
    setTasks(newTasks);
  };

  const handleRemove = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setNum(newTasks.length);
  };

  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Tasks saved successfully!');
  };
  const deleteAllTasks = () => {
    setTasks([]);  
    setNum(0); 
    localStorage.removeItem('tasks');
  };

  return (
    <div className="container mx-auto mt-10">
        <div className='flex items-center'>
        <div className="px-3 py-3 md:py-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Choose Room:
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Room 1</option>
                <option>Room 2</option>
                <option>Room 3</option>
                <option>Room 4</option>
                <option>Room 5</option>
                <option>Room 6</option>
                <option>Room 7</option>
              </select>
            </div>
      <div className="mb-3">
        <label htmlFor="num" className="block text-sm font-medium text-gray-700">Number of Tasks:</label>
        <input
          type="number"
          className="form-control mt-1 block p-3"
          id="num"
          value={num}
          onChange={handleNumChange}
        />
      </div>
        </div>
        
      <div id="tasks-container">
        {tasks.map((task, index) => (
          <div className="mb-3 flex items-center" key={index}>
            <span className="form-task-num w-">{index + 1}</span>
            <div className="w-1/2 pr-2 pl-2">
              <label htmlFor={`name${index}`} className="block text-sm font-medium text-gray-700">Task Name:</label>
              <input
                type="text"
                className="form-control mt-1 block w-full p-3"
                id={`name${index}`}
                value={task.name}
                onChange={(e) => handleTaskChange(index, 'name', e.target.value)}
              />
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor={`image${index}`} className="block text-sm font-medium text-gray-700">Image:</label>
              <input
                type="file"
                className="form-control mt-1 block w-full bg-white p-3"
                id={`image${index}`}
                onChange={(e) => handleTaskChange(index, 'image', e.target.files[0]?.name || '')}
              />
            </div>
            <button className="ml-2 bg-red-500 text-white rounded px-3 py-1" onClick={() => handleRemove(index)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 text-white rounded px-4 py-2" onClick={saveTasks}>Save Tasks</button>
        <button
                className=" bg-red-500 text-white rounded px-4 py-2 ml-2"
                onClick={deleteAllTasks}
              >
                Delete All Tasks
              </button>
      </div>
    </div>
  );
}

export default CreateTasks;
