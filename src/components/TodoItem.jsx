"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Trash2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleEdit = () => {
        if (editText.trim()) {
            onEdit(todo.id, editText.trim());
            setIsEditing(false);
        } else {
            setEditText(todo.text); // Revert if empty
            setIsEditing(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleEdit();
        } else if (e.key === "Escape") {
            setEditText(todo.text);
            setIsEditing(false);
        }
    };

    return (
        <motion.li
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="group flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
        >
            <button
                onClick={() => onToggle(todo.id)}
                className={cn(
                    "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200",
                    todo.completed
                        ? "bg-purple-500 border-purple-500"
                        : "border-gray-300 hover:border-purple-400"
                )}
            >
                {todo.completed && <Check size={14} className="text-white" />}
            </button>

            <div className="flex-grow min-w-0">
                {isEditing ? (
                    <input
                        ref={inputRef}
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onBlur={handleEdit}
                        onKeyDown={handleKeyDown}
                        className="w-full px-2 py-1 text-gray-700 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    />
                ) : (
                    <span
                        onDoubleClick={() => setIsEditing(true)}
                        className={cn(
                            "block truncate cursor-pointer select-none transition-all duration-200",
                            todo.completed ? "text-gray-400 line-through" : "text-gray-700"
                        )}
                    >
                        {todo.text}
                    </span>
                )}
            </div>

            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                    onClick={() => onDelete(todo.id)}
                    className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </motion.li>
    );
}
