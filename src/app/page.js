"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import TodoInput from "@/components/TodoInput";
import TodoItem from "@/components/TodoItem";
import TodoFilters from "@/components/TodoFilters";

export default function Home() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const addTodo = (text) => {
    setTodos([
      { id: Date.now(), text, completed: false },
      ...todos,
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            Tasks
          </h1>
          <p className="text-gray-600">Stay organized and productive</p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-6 sm:p-8">
          <TodoInput onAdd={addTodo} />

          <ul className="space-y-3 min-h-[200px]">
            <AnimatePresence initial={false} mode="popLayout">
              {filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onEdit={editTodo}
                />
              ))}
            </AnimatePresence>

            {filteredTodos.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-40 text-gray-400"
              >
                <p>No tasks found</p>
              </motion.div>
            )}
          </ul>

          <TodoFilters
            filter={filter}
            setFilter={setFilter}
            activeCount={todos.filter(t => !t.completed).length}
            onClearCompleted={clearCompleted}
            hasCompleted={todos.some(t => t.completed)}
          />
        </div>
      </div>
    </main>
  );
}
