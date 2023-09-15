import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, cradithour, remaining }) => {
    return (
        <div className="md:w-2/3 bg-white p-5 mx-5 rounded-xl h-80">
            <div>

                <span className='text-xl font-bold mt-5 text-[#2F80ED]'  >Credit Hour Remaining: {remaining} hr </span>
                <hr></hr>
                {/* <h3 className='text-2xl mt-3'>Cradit time : {cradithour}</h3> */}


            </div>
            {/* <h1 className="text-3xl">bookmarked blogs: {bookmarks.length}</h1> */}
            <h1 className='text-2xl mt-5 font-bold'>Course Name</h1>
            
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
<hr />
            <h3 className='text-2xl mt-6'>Total Credit Hour : {cradithour}</h3>
            <hr></hr>
        </div>
    );
};

Bookmarks.propTypes= {
    bookmarks: PropTypes.array,
    cradithour: PropTypes.number,
    remaining: PropTypes.number
}

export default Bookmarks;