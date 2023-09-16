import Header from './components/Header/header'
import Courses from './components/Courses/Courses'
import Bookmarks from './components/Bookmarks/Bookmarks'
import './App.css'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [cradithour, setcradithour] = useState(0)
//faiza

const [remaining , setremaining] = useState(20)

//

  const handleAddToBookmark = (course, credit) =>{
  // console.log('bookmark added soon')
  // console.log(course)

  const a = [...bookmarks]; 
  const newBookmarks = [...bookmarks, course];

  if(a.includes(course)){   
    alert('Same course found');
    return ;
  }
  setBookmarks(newBookmarks);
  
  handleCraditHour(credit);

  handleremaining(credit);
}

const handleCraditHour = time =>{

const newCraditHour = cradithour + time;
  if (newCraditHour > 20){
    alert('More than 20 hours');
    return ;
  }
  setcradithour(newCraditHour);
  // console.log('time dekhabo total', time);
  // console.log(typeof time)

}
  // console.log('time dekhabo total', time);

//faiza
const handleremaining = time=>{
  const newRemaining = remaining-time;
  if (newRemaining < 0) {
    alert('Less than 0');
    return ;
  }
  setremaining(newRemaining);
  // console.log('remmainimg shw korbo' ,time)

}


//


  return (
    <>
    <Header></Header>
   <div className='md:flex max-w-7xl mx-auto mt-20'>
        <Courses handleAddToBookmark={handleAddToBookmark}
        
          handleCraditHour={handleCraditHour}

          handleremaining={handleremaining}
        
        ></Courses>
   <Bookmarks bookmarks={bookmarks}

          cradithour={cradithour}
          remaining={remaining}
          
   
   
   
   ></Bookmarks>
   </div>
     
    </>
  )
}

export default App
