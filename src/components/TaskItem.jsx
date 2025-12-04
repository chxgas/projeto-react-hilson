import React, { useState } from "react";

export default function TaskItem({ task, deleteTask, toggleTask, editTask }) {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const saveEdit = () => {
    const trimmed = newText.trim();
    if (!trimmed) return;
    editTask(task.id, trimmed);
    setEditing(false);
  };

  return (
    <li className={`task-item ${task.done ? "done" : ""}`}>

      {}
      <label className="checkbox-wrap">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task.id)}
          aria-label={task.done ? "Desmarcar tarefa" : "Marcar tarefa como concluída"}
        />
        <span className="custom-checkbox" />
      </label>

      {}
      <div className="task-content">
        {editing ? (
          <input
            className="edit-input"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") saveEdit(); }}
            aria-label="Editar tarefa"
          />
        ) : (
          <span
            className="task-text"
            onDoubleClick={() => setEditing(true)}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter") toggleTask(task.id); }}
            role="button"
            aria-pressed={task.done}
          >
            {task.text}
          </span>
        )}
      </div>

      {}
      <div className="actions">
        {editing ? (
          <>
            <button className="save-btn" onClick={saveEdit} title="Salvar edição">
              <i className="fa-solid fa-check"></i>
            </button>
            <button className="cancel-btn" onClick={() => { setEditing(false); setNewText(task.text); }} title="Cancelar">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </>
        ) : (
          <>
            <button className="edit-btn" onClick={() => setEditing(true)} title="Editar">
              <i className="fa-solid fa-pen"></i>
            </button>

            <button className="delete-btn" onClick={() => deleteTask(task.id)} title="Excluir">
              <i className="fa-solid fa-trash"></i>
            </button>
          </>
        )}
      </div>
    </li>
  );
}
