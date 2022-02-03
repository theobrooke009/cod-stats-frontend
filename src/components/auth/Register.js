import React from 'react'
import { registerUser } from '../lib/api.js'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
}

function Register({ setLogin }) {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)
  const [error, setError] = React.useState(false)

  console.log('FDATA', formData)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formData, [e.target.name]: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await registerUser(formData)
      navigate('/login')
    } catch (err) {
      console.log(err)
      setFormErrors(err.response.data.errors)
      setError(err.response)
      console.log(error)
    }
  }


  function handleRegister(){
    setLogin(true)
  }
  return (
    <div className='register-div'>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label className='label'>Username</label>
          <input
            className='register-input'
            placeholder='Enter Username'
            onChange={handleChange}
            name='username'
          />
        </div>
        <div className='field'>
          <label className='label'>Email Address</label>
          <input 
            className='register-input'
            placeholder='Enter Email Address'
            onChange={handleChange}
            name='email'
          /> 
          {
            formErrors.email.includes('unique') &&
            <motion.div className='error-div'
              initial={{ x: '5vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.1 }}>
              <h3 className='login-error'>Account already exists</h3>
            </motion.div>
          }     
        </div>
        <div className='field'>
          <label className='label'>Password</label>
          <input 
            className='register-input'
            placeholder='Enter Your Password'
            onChange={handleChange}
            name='password'
            type='password'
          />
        </div>
        <div className='field'>
          <label className='label'>Password Confirmation</label>
          <input
            className='register-input'
            placeholder='Confirm Your Password'
            onChange={handleChange}
            name='passwordConfirmation'
            type='password'
          />
          {
            formErrors.passwordConfirmation.includes('does not match') &&
            <motion.div className='error-div'
              initial={{ x: '5vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.1 }}>
              <h3 className='login-error'>Passwords do not match</h3>
            </motion.div>
          }
        </div>


        <button className='button register-button is-info'>Register</button>
        <div className='login-switch'>
          <h1>Already have an account? <a onClick={handleRegister}>Sign in here</a></h1>
        </div>
      </form>
    </div>
  )


}

export default Register
