import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigation=useNavigate();
  const gotocontact=()=>{
    navigation("/contact");
  }
  return (
    <>
        
         <section>
            <h1>About Page</h1>
            <button onClick={()=>{gotocontact()}}>Go to contact page</button>
         </section>
    </>
  )
}

export default About