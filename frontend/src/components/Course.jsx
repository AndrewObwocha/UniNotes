import { useNavigate } from "react-router-dom"
import '../styles/Course.css';

function Course({ course }) {
    const navigate = useNavigate()
    
    return (
        <div className='course'>       
            <h2 className='course-title'>{ course.title }</h2>
            <span className='course-detail'>{ course.code }</span>
            <span className='course-detail'>Course Instructor</span>
            <div className='course-buttons'>
                <button className='course-viewbutton' onClick={ () => navigate(`/course-notes/notes/${course.id}`)}>VIEW NOTES</button>
                <button className='course-addbutton' onClick={ () => navigate(`/course-notes/${course.id}`) }>Add Note</button>
            </div>
        </div>
    )
}

export default Course