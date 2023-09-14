import PropTypes from 'prop-types';

const Course = ({course}) => {
    const{course_name}=  course;
    return (
        <div>
            <h2 className="text-3xl">{course_name}</h2>
        </div>
    );
};

Course.propTypes ={
    course: PropTypes.object.isRequired
}

export default Course;