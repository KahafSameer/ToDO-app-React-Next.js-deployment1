"use client";

import { cn } from "@/lib/utils";

export default function TodoFilters({
    filter,
    setFilter,
    activeCount,
    onClearCompleted,
    hasCompleted
}) {
    const filters = [
        { id: "all", label: "All" },
        { id: "active", label: "Active" },
        { id: "completed", label: "Completed" },
    ];

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 mt-6 px-2">
            <span>{activeCount} items left</span>

            <div className="flex p-1 bg-gray-100 rounded-lg">
                {filters.map((f) => (
                    <button
                        key={f.id}
                        onClick={() => setFilter(f.id)}
                        className={cn(
                            "px-3 py-1 rounded-md transition-all duration-200",
                            filter === f.id
                                ? "bg-white text-purple-600 shadow-sm font-medium"
                                : "hover:text-gray-700"
                        )}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            <button
                onClick={onClearCompleted}
                disabled={!hasCompleted}
                className={cn(
                    "hover:text-red-500 transition-colors duration-200",
                    !hasCompleted && "invisible"
                )}
            >
                Clear Completed
            </button>
        </div>
    );
}
