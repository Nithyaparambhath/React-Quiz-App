import React, { useState } from 'react'
import { quizDetails } from '../quizDetails'
import Score from '../components/Score'
function Home() {
    const [qustnNo,setQustnNo] = useState(0)
    const [clicked,setClicked] = useState(0)
    const [total, setTotal] = useState(0)
    const [result,setResult] =useState(0)


    const nextQustion = ()=>{
        updateTotalValue ()
        if(qustnNo<quizDetails.length-1){
            setQustnNo(qustnNo+1)
            setClicked(0)
        }else{
            setResult(true)
        }
    }
    const updateTotalValue = ()=>{
        if(clicked===quizDetails[qustnNo].answer){
            setTotal(total+1)
        }
    }
  return (
    <>
        
        <div style={{minHeight:'100vh',background:'#000000'}} className='pt-2 d-flex justify-content-center align-items-center flex-column'>
           {result ?(
<Score total={total} totalValue = {quizDetails.length} />

           ):<div className='w-100 pt-4 d-flex justify-content-center align-items-center flex-column'>
                <div className='text-center border rounded-4 p-3 w-50'>
                    <h4 className='text-warning'>Question No.{qustnNo +1}</h4>
                    <p className='mt-4'>{quizDetails[qustnNo].questn}</p>
                </div>
                <div className='w-50 p-5 d-flex justify-content-center align-items-center flex-column'>
                        
                        {quizDetails[qustnNo].optns.map((item,i)=>(
                            <button key={i} onClick={()=>setClicked(i+1)}  className={`fw-bolder border rounded-4 btn btn-dark text-light shadow w-100 mb-4 p-3 ${clicked ===i+1?"bg-warning text-dark ":""}`} >
                            {item}
                            </button>
                        ))}
                        
                        
    
                        <button onClick={nextQustion}  style={{height:'50px'}} className='fw-bolder border  btn btn-warning text-dark shadow w-50 mb-4' >
                            NEXT
                        </button>
    
    
                </div>
           </div>}
        </div>
    </>
  )
}

export default Home