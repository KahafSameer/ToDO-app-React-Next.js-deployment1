"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TodoInput({ onAdd }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative mb-6">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What needs to be done?"
                className={cn(
                    "w-full px-4 py-4 pl-12 rounded-xl bg-white/50 backdrop-blur-sm border-2 border-white/20",
                    "shadow-lg shadow-black/5 text-gray-700 placeholder:text-gray-400",
                    "focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent",
                    "transition-all duration-200"
                )}
            />
            <button
                type="submit"
                disabled={!text.trim()}
                className={cn(
                    "absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-lg",
                    "text-gray-400 hover:text-purple-600 hover:bg-purple-50",
                    "transition-colors duration-200",
                    !text.trim() && "opacity-50 cursor-not-allowed hover:text-gray-400 hover:bg-transparent"
                )}
            >
                <Plus size={24} />
            </button>
        </form>
    );
}
