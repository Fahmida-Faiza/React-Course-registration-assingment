import Header from './components/Header/header'
import Courses from './components/Courses/Courses'
import Bookmarks from './components/Bookmarks/Bookmarks'
import './App.css'

function App() {
  

  return (
    <>
    <Header></Header>
   <div className='md:flex max-w-7xl mx-auto '>
    <Courses></Courses>
   <Bookmarks></Bookmarks>
   </div>
     
    </>
  )
}

export default App
