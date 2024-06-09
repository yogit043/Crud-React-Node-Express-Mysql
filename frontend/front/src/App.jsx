import { useState } from 'react'
import Home from "./Home"
import Create from './Create'
import 'bootstrap/dist/css/bootstrap.min.css'
import Read from './Read'
import Edit from './Edit'
// import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/create" element = {<Create />}></Route>
        <Route path = "/read/:id" element = {<Read />}></Route>
        <Route path = "/edit/:id" element = {<Edit />}> </Route>
 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
