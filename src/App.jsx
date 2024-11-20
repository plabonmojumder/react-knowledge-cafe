
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Boookmarks from './components/Bookmarks/Boookmarks'
import Header from './components/Header/Header'

function App() {


  return (
    <>
    
  <Header></Header>
  <div className='md:flex'>
  <Blogs></Blogs>
  <Boookmarks></Boookmarks>
  
  </div>
 
      
   
    </>
  )
}

export default App
