import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    let navigate = useNavigate()
    const pleaseGoToHome = () => {
        navigate("/login")
    }
  return (
    <div className="page-not-found">
        <div className='text-danger text-center'>Page you are trying to look, does not exist</div>
        <div className="btn btn-primary" onClick={pleaseGoToHome}>Please go to home</div>
    </div>
  )
}

export default PageNotFound