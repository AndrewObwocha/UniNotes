import { useState, useEffect } from "react";
import api from '../api';
import '../styles/Home.css';
import Course from '../components/Course';
import Navbar from "../components/Navbar";

function Home() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses()
    }, [])

    const getCourses = () => {
        api
            .get('/course_notes/courses/list')
            .then((res) => res.data)
            .then((data) => { setCourses(data); console.log(data) })
            .catch((err) => alert(err));
    }

    return (
        <div>
            <Navbar />
            <div className="course-listing">
                <h2 className="course-pagetitle">Available Courses</h2>
                <div className='courses'>
                    {courses.map((course) => (
                        <Course course={ course }/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home