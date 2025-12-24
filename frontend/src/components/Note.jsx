import "../styles/Note.css";

function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <div className="note-container">
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formattedDate}</p>
      <div className="note-actions">
        <button className="delete-button" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Note;
