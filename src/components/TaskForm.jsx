import React, { useState } from "react";

export default function TaskForm({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTask({
      id: Date.now(),
      text,
      done: false
    });

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
