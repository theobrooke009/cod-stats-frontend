import React from 'react'
import { registerUser } from '../lib/api.js'
import { useNavigate } from 'react-router-dom'


const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
}

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)
  const [error, setError] = React.useState(false)

  console.log(navigate, formData, formErrors)

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
      
      setError(err.response)
      console.log(error)
    }
  }
  


  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label className='label'>Username</label>
          <input
            placeholder='Enter Username'
            onChange={handleChange}
            name='username'
          />
        </div>
        <div>
          <label className='label'>Email Address</label>
          <input 
            placeholder='Enter Email Address'
            onChange={handleChange}
            name='email'
          />      
        </div>
        <div>
          <label className='label'>Password</label>
          <input 
            placeholder='Enter Your Password'
            onChange={handleChange}
            name='password'
          />
        </div>
        <div>
          <label className='label'>Password Confirmation</label>
          <input
            placeholder='Confirm Your Password'
            onChange={handleChange}
            name='passwordConfirmation'
          />
        </div>

        <button className='button is-info'>Register</button>
      
      </form>
    </div>
  )


}

export default Register
