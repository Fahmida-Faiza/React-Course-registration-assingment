import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {course_name} = bookmark;
    return (
        <div className=''>
            <li className='text-xl text-[#1c1b1b99]'>{course_name}</li>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object
}

export default Bookmark;