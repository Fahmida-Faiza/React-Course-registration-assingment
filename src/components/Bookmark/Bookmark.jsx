import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {id,course_name} = bookmark;
    return (
        <div className=''>
            <h3 className='text-xl text-[#1c1b1b99]'>{id} {course_name}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object
}

export default Bookmark;