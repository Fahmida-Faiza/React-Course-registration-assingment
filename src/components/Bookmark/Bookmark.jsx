import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {id,course_name} = bookmark;
    return (
        <div>
            <h3 className='text-3xl'>{id} {course_name}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object
}

export default Bookmark;