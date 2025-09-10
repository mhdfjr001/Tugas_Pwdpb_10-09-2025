import React, { useState } from "react";
import "./App.css"; // tambahin import css

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { text: newTodo, done: false }]);
    setNewTodo("");
  };

  const toggleDone = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index].text);
  };

  const saveEdit = (index) => {
    if (editingText.trim() === "") return;
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: editingText } : todo
    );
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <div className="app-container">
      <div className="todo-box">
        <h1 className="todo-title">📝 Todo List</h1>

        {/* Input & tombol tambah */}
        <div className="todo-input-container">
          <input
            type="text"
            placeholder="Tambah tugas..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="todo-input"
          />
          <button onClick={addTodo} className="todo-add-btn">
            Tambah
          </button>
        </div>

        {/* Daftar todo */}
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              {editingIndex === index ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="todo-input"
                />
              ) : (
                <span
                  onClick={() => toggleDone(index)}
                  className={`todo-text ${todo.done ? "todo-done" : ""}`}
                >
                  {todo.text}
                </span>
              )}

              <div className="flex gap-2 ml-3">
                {editingIndex === index ? (
                  <button
                    onClick={() => saveEdit(index)}
                    className="btn btn-save"
                  >
                    Simpan
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(index)}
                    className="btn btn-edit"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => removeTodo(index)}
                  className="btn btn-delete"
                >
                  Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
