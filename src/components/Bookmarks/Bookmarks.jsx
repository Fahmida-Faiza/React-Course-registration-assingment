import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, cradithour, remaining }) => {
    return (
        <div className="md:w-2/3 bg-white p-5 mx-5 rounded-xl">
            <div>

                <span className='text-xl' >Total remaining hours: {remaining} </span>
                <h3 className='text-4xl'>Cradit time : {cradithour}</h3>


            </div>
            {/* <h1 className="text-3xl">bookmarked blogs: {bookmarks.length}</h1> */}
            <h1 className='text-3xl'>Course Name</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes= {
    bookmarks: PropTypes.array,
    cradithour: PropTypes.number,
    remaining: PropTypes.number
}

export default Bookmarks;