import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  // const [todos, setTodos] = useState([]);
  // const [newTodo, setNewTodo] = useState({ name: '', age: '' });

  // //onchange
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setNewTodo({ ...newTodo, [name]: value });
  // };
  const [values , setValues] = useState({
    name:"",
    email:""
  })

  const navigate = useNavigate()

  const handleSubmit = (e) =>{
      e.preventDefault()
      axios.post("http://localhost:8081/student",values)
      .then(res=>{console.log(res)
      navigate("/")
      })
      .catch(err=>{console.log(err)})
  }

  
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form action="" onSubmit={handleSubmit}>
            <h2>Add Student</h2>
            <div className='mb-2'>
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" placeholder='Enter Name' className='form-control' onChange={e=>{setValues({...values,name:e.target.value})}}/>
            </div>
            <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" placeholder='Enter Email' className='form-control' onChange={e=>{setValues({...values,email:e.target.value})}}/>
            </div>
            <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create
