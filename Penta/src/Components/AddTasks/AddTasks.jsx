import React, { useEffect, useState } from "react";
import "./AddTasks.css";
import Navbar from "../Navbar";

export default function AddTasks() {
  const [numOfTasks, setNumOfTasks] = useState(0);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [taskItem, setTaskItem] = useState({});
  const [allTasks, setAllTasks] = useState([]);
  const handleNumOfTasks = (event) => {
    setNumOfTasks(+event.target.value);
  };
  const deleteAllTasks = (event) => {
    setNumOfTasks(0);
  };
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };
  useEffect(() => {
    setTaskItem({ name, image });
  }, [name, image]);

  console.log(taskItem);
  const addTaskk = (event) => {
    event.preventDefault();
    setAllTasks([...allTasks, taskItem]);
  };
  console.log(allTasks);
  const arr = Array.from(Array(numOfTasks).keys());
  const tasks = arr.map((ele) => {
    return (
      <>
        <form className="form-task flex items-center mb-5 justify-center flex-wrap p-3 rounded">
          <span className="form-task-num">{ele + 1}</span>
          <div>
            <input
              className="shadow appearance-none rounded w-full bg-gray-200 py-3 px-4 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="task_name"
              type="text"
              placeholder="Add Task Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              className="shadow appearance-none rounded w-full bg-gray-200 py-3 px-4 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="task-image"
              type="file"
              onChange={onImageChange}
              required
            />
          </div>
          <button
            className="add_t bg-green-400 p-3 rounded text-white cursor-pointer"
            onClick={addTaskk}
          >
            Add
          </button>
        </form>
      </>
    );
  });

  return (
    <>
    <Navbar/>
      <div className="AddTasks bg-gray-200 p-5">
        <h1 className="text-center font-extrabold text-2xl mb-3"> Add Tasks</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="form-container md:columns-2 mb-4">
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
            <div className=" px-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="number"
              >
                Add Number Of Tasks:
              </label>
              <input
                className=" appearance-none rounded w-full bg-gray-200 border-gray-200 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                type="number"
                min="1"
                placeholder="Add Number Of Tasks"
                onInput={handleNumOfTasks}
              />
            </div>
          </div>
          <h1 className="text-3xl mb-7 text-center tasks-heading">Tasks</h1>
          <div className="form-tasks-container">{tasks}</div>
          {numOfTasks > 0 ? (
            <div className="btns-tasks-container flex justify-center items-center gap-4 flex-wrap">
              <span className="save-tasks  bg-gray-950 text-center text-white p-3 rounded">
                Save Tasks
              </span>
              <span
                className="delete-tasks  bg-red-500 text-center text-white p-3 rounded"
                onClick={deleteAllTasks}
              >
                Delete All Tasks
              </span>
            </div>
          ) : (
            <div className="no-tasks text-center font-bold">No Tasks Added</div>
          )}
        </form>
      </div>
    </>
  );
}
