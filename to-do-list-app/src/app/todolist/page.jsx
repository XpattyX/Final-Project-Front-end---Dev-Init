'use client'

import React, { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="border-l-4 border-yellow-200 pl-3">
      <div className="flex border-b-2 border-slate-200 mt-2">
        <h1 className="flex-auto text-2xl">To-Do List</h1>
        <form onSubmit={addTask} className="mb-4 flex">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-xl mr-2"
          />
          <button type="submit" className="p-2 bg-orange-400 rounded-xl hover:bg-orange-200">
            Add Task
          </button>
        </form>
      </div>

      <ul className="w-full">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center mb-2 bg-white p-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
              className="mr-2"
            />
            <span
              className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="p-2 ml-2 text-xs underline underline-offset-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
