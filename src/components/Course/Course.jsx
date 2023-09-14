import PropTypes from 'prop-types';

const Course = ({course}) => {


    const{course_name , image , course_details, Price , credit}=  course;
    return (
        <div className=''>
            <img src={image} alt={`image of the title ${course_name}`}/>
            <h2 className="text-3xl">{course_name}</h2>
            <h3 className='text-2xl'>{course_details}</h3>
            
        <div className='flex justify-between'>
            <div>
{/* <img src="" alt="" /> */}
<span>Price: {Price}</span>
</div>
<div>
    <span>{credit}hr</span>

</div>

            </div>

            </div>
        
    );
};

Course.propTypes ={
    course: PropTypes.object.isRequired
}

export default Course;