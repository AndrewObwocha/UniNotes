import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import Note from "../components/Note";
import Navbar from "../components/Navbar";
import "../styles/CreateNote.css";

function Notes() {
  const { course } = useParams();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/notes/note/createAndList", {
        params: { course: course },
      })
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/notes/notes/delete/${id}`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!");
        else alert("Failed! Some error occurred.");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <Navbar />
      <main className="page-shell">
        <section className="notes-section">
          <h1 className="notes-title">Course Notes</h1>
          {notes.map((note) => (
            <Note note={note} onDelete={deleteNote} key={note.id} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Notes;
