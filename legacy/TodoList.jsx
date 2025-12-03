import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    // Load tasks from localStorage on component mount
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    // Save tasks to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim() !== '') {
            const task = {
                id: Date.now(),
                text: newTask,
                completed: false,
            };
            setTasks([...tasks, task]);
            setNewTask('');
        }
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md sm:max-w-lg md:max-w-xl">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">To-Do List</h1>

                {/* Add Task Input */}
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Add a new task..."
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={addTask}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition duration-200"
                    >
                        Add
                    </button>
                </div>

                {/* Task List */}
                <ul className="space-y-2">
                    {tasks.map(task => (
                        <li
                            key={task.id}
                            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                        >
                            <div className="flex items-center flex-grow">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTask(task.id)}
                                    className="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <span
                                    className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
                                >
                                    {task.text}
                                </span>
                            </div>
                            <button
                                onClick={() => deleteTask(task.id)}
                                className="ml-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition duration-200"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>

                {tasks.length === 0 && (
                    <p className="text-center text-gray-500 mt-4">No tasks yet. Add one above!</p>
                )}
            </div>
        </div>
    );
};

export default TodoList;
