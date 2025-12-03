# 📝 Modern Todo App

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple?style=for-the-badge&logo=framer)

A production-ready, beautifully designed Todo application built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. It features a modern glassmorphism UI, smooth animations, and robust local storage persistence.

---

## ✨ Features

- **🎨 Modern UI**: Clean, glassmorphism-inspired design with beautiful gradients.
- **⚡ Fast & Responsive**: Built with Next.js for optimal performance on all devices.
- **💾 Auto-Save**: Your tasks are automatically saved to Local Storage.
- **✏️ Edit Tasks**: Double-click any task to edit it instantly.
- **🔍 Smart Filtering**: Filter by All, Active, or Completed tasks.
- **🎬 Smooth Animations**: Powered by Framer Motion for delightful interactions.
- **🧹 Clean Up**: One-click button to clear all completed tasks.

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Utils**: `clsx` & `tailwind-merge`

## 🛠️ Getting Started

Follow these steps to run the project locally:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project folder:
    ```bash
    cd todo-app-react-next-js
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open your browser**:
    Visit [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal).

## 📂 Project Structure

```bash
src/
├── app/
│   ├── layout.js       # Global layout & metadata
│   ├── page.js         # Main application logic
│   └── globals.css     # Global styles & Tailwind directives
├── components/
│   ├── TodoInput.jsx   # Input field for new tasks
│   ├── TodoItem.jsx    # Individual task component with animations
│   └── TodoFilters.jsx # Filter controls (All/Active/Completed)
├── hooks/
│   └── useLocalStorage.js # Custom hook for data persistence
└── lib/
    └── utils.js        # Helper for class name merging
```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by [Your Name]
