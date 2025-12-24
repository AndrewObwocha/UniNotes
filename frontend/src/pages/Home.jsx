import { useState, useEffect } from "react";
import api from "../api";
import "../styles/Home.css";
import Course from "../components/Course";
import Navbar from "../components/Navbar";

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    api
      .get("/courses/course/list")
      .then((res) => res.data)
      .then((data) => {
        setCourses(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <Navbar />
      <main className="page-shell">
        <section className="course-listing">
          <h2 className="course-pagetitle">Available Courses</h2>
          <p className="course-subtitle">
            Browse your registered courses and jump straight into the notes you
            need for your next lecture or exam.
          </p>
          <div className="courses">
            {courses.map((course) => (
              <Course course={course} key={course.id} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
