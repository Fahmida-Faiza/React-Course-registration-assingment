import Header from './components/Header/header'
import Courses from './components/Courses/Courses'
import Bookmarks from './components/Bookmarks/Bookmarks'
import './App.css'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [cradithour, setcradithour] = useState(0)




  const handleAddToBookmark = (course, credit) =>{
  // console.log('bookmark added soon')
  // console.log(course)
  const newBookmarks = [...bookmarks, course];
  setBookmarks(newBookmarks);
    handleCraditHour(credit);
}

const handleCraditHour = time =>{

const newCraditHour = cradithour + time;
setcradithour(newCraditHour);
  console.log('time dekhabo total', time);
  // console.log(typeof time)


}
  // console.log('time dekhabo total', time);




  return (
    <>
    <Header></Header>
   <div className='md:flex max-w-7xl mx-auto mt-20'>
        <Courses handleAddToBookmark={handleAddToBookmark}
        
          handleCraditHour={handleCraditHour}
        
        ></Courses>
   <Bookmarks bookmarks={bookmarks}

          cradithour={cradithour}
   
   
   
   ></Bookmarks>
   </div>
     
    </>
  )
}

export default App
