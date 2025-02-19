import React from "react";

function AddTask() {
  return (
    <div>
      <form className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-indigo-500 ">
          Add New Task
        </h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Task Title"
            className=" w-full px-3 py-2 border rounded-md foucs:outline-none foucs:ring-2 "
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Task Description"
            className="w-full px-3 py-2 border rounded-md foucs:outline-none foucs:ring-2 "
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <select className="w-full px-3 py-2 border rounded-md foucs:outline-none foucs:ring-2 ">
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
