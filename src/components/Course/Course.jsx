import PropTypes from 'prop-types';
import { FiDollarSign }  from 'react-icons/fi';
import { BsBook }  from 'react-icons/bs';


const Course = ({ course, handleAddToBookmark }) => {


    const { course_name, image, course_details, Price, credit } = course;
    return (
        <div className='border-2  bg-white p-4 rounded-lg '>
            <div className="flex justify-center ">
                <img  src={image} alt={`image of the title ${course_name}`} />
            </div>
            <h2 className="font-semibold my-4">{course_name}</h2>
            <h3 className='text-sm text-[#1c1b1b99]'>{course_details}</h3>

            <div className='flex justify-between mt-4'>
                <div>
                    {/* <img src="" alt="" /> */}
                    <span className='flex'> <FiDollarSign className='text-lg'/> Price: {Price}</span>
                </div>
                <div >
                    <span className='flex mr-3 gap-2'> <BsBook/> Credit:{credit}hr</span>
                    
                </div>

            </div>
            <button onClick={() => handleAddToBookmark(course, credit)} 
            className='bg-[#2F80ED] rounded-xl text-white w-full p-4 mt-4' type="submit">Select</button>
            {/* <button onClick={() => handleCraditHour(credit) } 
            className='bg-[#2F80ED] rounded-xl text-white w-full p-4 mt-4' type="submit">Select</button> */}

        </div>

    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Course;