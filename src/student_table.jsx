import React from 'react'
import { BrowserRouter as Router,Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css'

const Student_table = () => {
    const navigate=useNavigate();
    // const handle_click=()=>{
        
    // }
  return (
    <div className='content' style={{marginLeft:'200px',marginTop:'30px'}}>
      <body>

        <br/>
        <u><h2>Student Details</h2></u>
        <br/>
       <div className='container'>
        <div className='row justify-content-center'>
       <div className='col-md-6'>
<center>
    <table className="table table-bordered table-hover custom-table cursor-default " style={{border: '1.5px solid black'}}>
        <thead>
        <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Course</th>
        </tr>
        </thead>
       <tbody className='cursor-default'>
        <tr>
            <td>1</td>
            <td onClick={()=>navigate("/student/1")}>Wanda</td>
            <td>BCA</td>
        </tr>
        <tr>
            <td>2</td>
            <td onClick={()=>navigate("/student/2")}>Natasha</td>
            <td>B.Tech</td>
        </tr>
        <tr>
            <td>3</td>
            <td onClick={()=>navigate("/student/3")}>Hermonie</td>
            <td>B.com CS</td>
        </tr>
        <tr>
            <td>4</td>
            <td onClick={()=>navigate("/student/4")}>Ginny</td>
            <td>BBA</td>
        </tr>

        </tbody>
       </table>
       </center>
       <br/>
       {/* <button name='back' onClick={()=>navigate("/")}>Back &#8656;</button> */}
       </div>
       </div>
       </div>
       </body>
    </div>
  )
}

export default Student_table
