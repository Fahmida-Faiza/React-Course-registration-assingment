import PropTypes from 'prop-types';
import { FaBookmark}  from 'react-icons/fa';


const Course = ({ course, handleAddToBookmark }) => {


    const { course_name, image, course_details, Price, credit } = course;
    return (
        <div className='border-2  text-center bg-white p-4 rounded-lg '>
            <div className="flex justify-center ">
                <img  src={image} alt={`image of the title ${course_name}`} />
            </div>
            <h2 className="text-lg font-semibold my-4">{course_name}</h2>
            <h3 className='text-sm text-[#1c1b1b99]'>{course_details}</h3>

            <div className='flex justify-between mt-4'>
                <div>
                    {/* <img src="" alt="" /> */}
                    <span> $ Price: {Price}</span>
                </div>
                <div>
                    <span className='flex mr-3 gap-2'> <FaBookmark></FaBookmark>Credit:{credit}hr</span>

                </div>

            </div>
            <button onClick={()=> handleAddToBookmark(course)} 
            className='bg-[#2F80ED] rounded-xl text-white w-full p-4 mt-4' type="submit">Select</button>

        </div>

    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Course;