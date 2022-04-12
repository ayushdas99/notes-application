import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import Spinner from '../Layout/Spinner'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../auth/authSlice'
import Main from './Main'

export default function Login() {
  const [formData, setFormData] = useState({  
    email: '',
    password: '',
  
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  
  return(
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and fly towards your goals!</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>

          <div className='form-group'>
          <input
          type='email'
          className='form-control'
          id='email'
          name='email'
          value={email}
          placeholder='Enter your email'
          onChange={onChange}></input>
          </div>

          <div className='form-group'>
          <input
          type='password'
          className='form-control'
          id='password'
          name='password'
          value={password}
          placeholder='Enter your password'
          onChange={onChange}></input>
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block' >Submit</button>

          </div>
        </form>

      </section>

     

      
     
    </>
  )
    
  
  }
