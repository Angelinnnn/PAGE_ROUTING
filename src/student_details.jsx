import React from 'react'
import { useParams } from 'react-router-dom'
import './output.css'
import { useNavigate } from 'react-router-dom'

const Student_details = () => {
  const nav=useNavigate();
    const {id}=useParams();
const student_data= {
    1:{name:'Wanda',dob:'27-03-2005',contact:'908765654',attend:'98',bloodgrup:'A-ve',
    course:'BCA',percenage:'89',year:'I',"sub1": "90",
    "sub2": "85",
    "sub3": "88",
    "sub4": "92","total_marks": 355},
    2:{name:'Natasha',dob:'6-10-2004',percenage:'90',bloodgrup:'B-ve',contact:'9087567434',attend:'84',
    course:'B.Tech',year:'II',"sub1": "78",
    "sub2": "82",
    "sub3": "79",
    "sub4": "80","total_marks": 319},
    3:{name:'Hermonie',dob:'7-09-2004',percenage:'86',bloodgrup:'A+ve',contact:'900853265', attend:'80',
    course:'B.com CS',year:'I',"sub1": "85",
    "sub2": "89",
    "sub3": "91",
    "sub4": "87","total_marks": 352
},
    4:{name:'Ginny',dob:'18-05-2005',percenage:'97',bloodgrup:'O-ve',contact:'9374078824',attend:'90',
    course:'BBA',year:'IV', "sub1": "92",
    "sub2": "94",
    "sub3": "90",
    "sub4": "88","total_marks": 364}
}
const student=student_data[id];
  return (
    <body>
    <div className='details_div'><br/><br/>
   <u> <h2>Student Details</h2></u><br/>
   <br/>
   <div className='cards'>
   <div className='card' style={{border: '1.5px solid black'}}>
  <h4>Personal Details</h4>
  <br/>
  <p>Name: {student.name}</p>
  <p>Dob: {student.dob}</p>
  <p>Percentage: {student.bloodgrup}</p>
  <p>Contact: {student.contact}</p>
  </div>
  <br/>
  <div className='card' style={{border: '1.5px solid black'}}>
  <h4>Acadamic Details</h4>
  <br/>
  <p>Course: {student.course}</p>
  <p>Year: {student.year}</p>
  <p>Percentage: {student.percenage}%</p>
  <p>Attendence: {student.attend}%</p>
  </div>
  <div className='card' style={{border: '1.5px solid black'}}>
  <h4>Mark Details</h4>
  <p>Subject 1: {student.sub1}</p>
  <p>Subject 2: {student.sub2}</p>
  <p>Subject 3: {student.sub3}</p>
  <p>Subject 4: {student.sub4}</p>
  <p>Total Marks: {student.total_marks}</p>
    </div>
    </div>
    <br/>
    <button name='back' onClick={()=>nav("/table")}>Back &#8656;</button>
    </div>
    </body>
  )
}

export default Student_details
