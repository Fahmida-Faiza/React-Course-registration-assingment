import PropTypes from 'prop-types';

const Course = ({ course }) => {


    const { course_name, image, course_details, Price, credit } = course;
    return (
        <div className='border-2 border-red-400 text-center bg-white p-4 rounded-lg'>
            <div className="flex justify-center ">
                <img  src={image} alt={`image of the title ${course_name}`} />
            </div>
            <h2 className="text-lg font-semibold">{course_name}</h2>
            <h3 className='text-sm text-[#1c1b1b99]'>{course_details}</h3>

            <div className='flex justify-between'>
                <div>
                    {/* <img src="" alt="" /> */}
                    <span>Price: {Price}</span>
                </div>
                <div>
                    <span>{credit}hr</span>

                </div>

            </div>
            <button className='bg-[#2F80ED] rounded-xl text-white w-full p-4' type="submit">Select</button>

        </div>

    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;