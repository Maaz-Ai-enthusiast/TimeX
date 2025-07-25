# ⏰ TimesX(React.js)

**TimeX** is a modern, responsive AI chat frontend built using **React.js** and **Tailwind CSS**. It includes a sidebar for chat history, a chat window, input box, and model selector — all optimized for usability and speed.

🔗 **Live Demo:** [https://timesx.netlify.app/](https://timesx.netlify.app/)  
📂 **GitHub Repo:** [https://github.com/Maaz-Ai-enthusiast/TimeX](https://github.com/Maaz-Ai-enthusiast/TimeX)

---

## 📸 UI Preview

![TimeX UI Preview](public/preview.png)

---

## 🛠️ Tech Stack

- **React.js** – UI library
- **Tailwind CSS** – Utility-first CSS for responsive styling
- **React Markdown** – For rendering AI-generated responses
- **React Icons** – For minimal iconography
- **Fetch API** – For frontend communication with custom backend APIs
- **Context API** – For state sharing (if used)

---

## ✨ UI Features

- ✅ Clean and intuitive layout
- ✅ Sidebar with chat titles
- ✅ Chat window with markdown support
- ✅ Input box with enter/send handling
- ✅ Dropdown to choose GPT models
- ✅ Loading states and scroll-to-bottom behavior

---

## 📁 Folder Structure

```
/public
  preview.png            – App preview image
/src
  /components
    ChatSidebar.jsx      – Sidebar UI for all chats
    ChatWindow.jsx       – Displays messages
    ChatInput.jsx        – Message input field
    ModelSelector.jsx    – Dropdown to pick OpenAI model
  /styles
    index.css            – TailwindCSS config
  App.jsx                – Main UI logic
  index.js               – ReactDOM entry point
```

---

## ⚙️ Getting Started

1. **Clone the repo**
```bash
git clone https://github.com/Maaz-Ai-enthusiast/TimeX.git
cd TimeX
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

---

## 📦 Used Libraries

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-markdown": "^9.x",
  "react-icons": "^5.x",
  "tailwindcss": "^3.x"
}
```

---

## 📌 Customization

You can easily customize:

- Colors and layout via `tailwind.config.js`
- Model list in the dropdown
- Chat bubble styles

---

## 🙌 Credits

Made with 💻 by [Maaz Irfan](https://github.com/Maaz-Ai-enthusiast)  
UI inspired by modern AI tools for clarity and focus.

---

**Solving real business problems with AI powered web and mobile apps**
