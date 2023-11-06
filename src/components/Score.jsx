import React from 'react'
import { Link } from 'react-router-dom'

function Score({total, totalValue}) {
  return (
    <div>
        <div className='rounded d-flex align-items-center justify-content-center flex-column p-3' >
     {
     total>=3?
     (
       <>
            <h3 className='text-warning'>Congratulations !!</h3>
            <h4>Your Score: {total}/{totalValue}</h4>
            <p className='fw-bolder text-center mt-4'>You did a greate job...! <i class="fa-solid fa-thumbs-up fa-bounce"></i></p>
            <Link to={'/'} className='btn btn-warning m-3' style={{textDecoration:'none',color:'white'}}>BACK TO HOME</Link>
       </>
     ):
     <>
            <h3 className='text-danger'>You Failed !!</h3>
            <h4>Your Score: {total}/{totalValue}</h4>
            <Link to={'/'} className='btn btn-warning m-3' style={{textDecoration:'none',color:'white'}}>BACK TO HOME</Link>
     </>

     }
    </div>
    </div>
  )
}

export default Score