import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Student_details from './student_details';
import Login from './Login_page';
import Student_table from './student_table';
import Layout from './Layout';

const Page_routing = () => {
  return (
    <div>
    <Router>
       <Routes>
       <Route path='/layout' element={<Layout><Student_table/></Layout>}/>
       <Route path='/' element={<Login/>}/>
       <Route path='/table' element={<Layout><Student_table/></Layout>}/>
        <Route path='/student/:id' element={<Layout><Student_details/></Layout>}/>
       </Routes>
      </Router>
      </div>

  )
}

export default Page_routing
