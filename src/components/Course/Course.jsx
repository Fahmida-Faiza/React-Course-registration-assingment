import PropTypes from 'prop-types'; // ES6

const Course = ({course}) => {
    console.log(course)
    return (
        <div>
            
        </div>
    );
};


Course.propTypes = {
    course: PropTypes.object.isRequired
}
export default Course;