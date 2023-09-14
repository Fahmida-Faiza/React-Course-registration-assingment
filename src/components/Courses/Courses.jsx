import { useEffect, useState } from "react";


const Course = () => {
    const [course, setCourse] = useState([]);
    useEffect( ()=>{

        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">course: {course.length}</h1>
        </div>
    );
};

export default Course;