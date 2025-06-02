import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from '../api';
import Note from "../components/Note";


function Notes() {
    const { course } = useParams()
    const [notes, setNotes] = useState([])
    
    useEffect(() => {
        getNotes()
    }, []);


    const getNotes = () => {
        api
            .get('/course_notes/notes/create_list', {
                params: { course: course }
            })
            .then((res) => res.data)
            .then((data) => { 
                setNotes(data); 
                console.log(data);
            })
            .catch((err) => alert(err));
    }

    const deleteNote = (id) => {
        api
            .delete(`/course_notes/notes/delete/${id}`)
            .then((res) => {
                if (res.status === 204) alert('Note deleted!')
                else alert('Failed! Some error occurred.')
                getNotes();
            })
            .catch((err) => alert(err));
    }
    
    return (
        <div>
            <h2>Notes</h2>
            {notes.map((note) => (
                <Note note={ note } onDelete={ deleteNote } key={ note.id }/>
            ))}
        </div>
    )
}

export default Notes