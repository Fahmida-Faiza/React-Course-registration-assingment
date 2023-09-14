import { useEffect, useState } from "react";


const Course = () => {
    const [course, setCourse] = useState([]);
    useEffect( ()=>{

        fetch('course.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Course;