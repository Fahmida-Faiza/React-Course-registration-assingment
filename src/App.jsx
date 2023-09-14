import Header from './components/Header/header'
import Courses from './components/Courses/Courses'
import Bookmarks from './components/Bookmarks/Bookmarks'
import './App.css'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
const handleAddToBookmark = course =>{
  // console.log('bookmark added soon')
  // console.log(course)
  const newBookmarks = [...bookmarks, course];
  setBookmarks(newBookmarks)
}
  return (
    <>
    <Header></Header>
   <div className='md:flex max-w-7xl mx-auto mt-20'>
        <Courses handleAddToBookmark={handleAddToBookmark}></Courses>
   <Bookmarks bookmarks={bookmarks}></Bookmarks>
   </div>
     
    </>
  )
}

export default App
