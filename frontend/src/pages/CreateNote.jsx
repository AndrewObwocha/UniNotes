import { useState } from "react";
import api from '../api';
import { useParams } from "react-router-dom";
import '../styles/CreateNote.css'

function CreateNote() {
    const { course } = useParams()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    const createNote = (e) => {
        e.preventDefault();

        const dataToSend = { title, content, course }
        console.log(dataToSend)
        api
            .post('/course_notes/notes/create_list', dataToSend)
            .then((res) => {
                if (res.status === 201) alert('Note created!');
                else alert('Failed! Some error occurred.');
            })
            .catch((err) => alert(err));
    }

    return (
        <div>
            <h2 className="notes-title">Create a note</h2>
            <form onSubmit={ createNote }>
                <label htmlFor='title'>Title:</label>
                <br />
                <input 
                    type='text'
                    id='title'
                    name='title'
                    required
                    value={title}
                    onChange={ (e) => setTitle(e.target.value) }
                />
                <label htmlFor='content'>Content:</label>
                <br />
                <textarea
                    id='content'
                    name='content'
                    required
                    value={content}
                    onChange={ (e) => setContent(e.target.value) }
                ></textarea>
                <br />
                <input type='submit' value='Submit'></input>
            </form>
        </div>
    )
}

export default CreateNote