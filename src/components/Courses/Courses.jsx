import { useEffect, useState } from "react";
import Course from "../Course/Course";


const Courses = () => {
   const [courses, setCourse] = useState([]);
    useEffect( ()=>{

        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">course: {courses.length}</h1>
            {

                courses.map( course => <Course 
                    key={course.id} 
                    course={course}
                    
                    
                    ></Course>)
            }
          
        </div>
    );
};

export default Courses;