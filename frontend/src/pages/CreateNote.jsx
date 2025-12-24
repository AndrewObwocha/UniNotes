import { useState } from "react";
import api from "../api";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/CreateNote.css";

function CreateNote() {
  const { course } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createNote = (e) => {
    e.preventDefault();

    const dataToSend = { title, content, course };
    console.log(dataToSend);
    api
      .post("/notes/note/createAndList", dataToSend)
      .then((res) => {
        if (res.status === 201) alert("Note created!");
        else alert("Failed! Some error occurred.");
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <Navbar />
      <main className="create-note-shell">
        <h1 className="notes-title">Create a note</h1>
        <section className="create-note-card">
          <h2>Add details</h2>
          <form onSubmit={createNote}>
            <div className="create-note-field">
              <label className="create-note-label" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="create-note-input"
              />
            </div>
            <div className="create-note-field">
              <label className="create-note-label" htmlFor="content">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="create-note-textarea"
              ></textarea>
            </div>
            <button type="submit" className="create-note-submit">
              Save note
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default CreateNote;
