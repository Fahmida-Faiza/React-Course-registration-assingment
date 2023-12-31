import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types'

const Courses = ({ handleAddToBookmark, handleCraditHour, handleremaining }) => {
   const [courses, setCourse] = useState([]);
    useEffect( ()=>{

        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* <h1 className="text-4xl">course: {courses.length}</h1> */}
            {

                courses.map( course => <Course 
                    key={course.id} 
                    course={course}
                    handleAddToBookmark={handleAddToBookmark}

                    handleCraditHour={handleCraditHour}

                    handleremaining={handleremaining}
                    
                    
                    ></Course>)
            }
          
        </div>
    );
};

Courses.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleCraditHour: PropTypes.func,
    handleremaining: PropTypes.func
}

export default Courses;