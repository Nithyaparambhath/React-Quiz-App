import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div style={{minHeight:'100vh',background:'#000000'}} className='d-flex justify-content-center align-items-center flex-column '>
        <img style={{width:'150px'}} src="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <h1 className='mt-3'>REACT MCQ QUIZ </h1>
        <Link to={'/home'} className='btn btn-warning border rounded-4 mt-4 '>LET'S START</Link>
    </div>
  )
}

export default LandingPage