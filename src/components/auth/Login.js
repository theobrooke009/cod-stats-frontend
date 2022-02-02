import React from 'react'
import { loginUser } from '../lib/api.js'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../lib/auth.js'
import { motion } from 'framer-motion'


function Login({ setLogin }) {

  const navigate = useNavigate()
  const [isError, setIsError] = React.useState(false)
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  })
  
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
   
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await loginUser(formData)
      
      setToken(data.token) 
      console.log('token here', data.token)
      navigate('/weapons')
     
    } catch (err) {
      setIsError(true)
      console.log('error', err)
    }
  }

  function handleLogin(){
    setLogin(false)
  }
 


  return (
    <div className="login-form">
      <form 
        onSubmit={handleSubmit}
        className="login-form"
      >
        <div className="login-input">
          {
            isError &&
            <motion.div className='error-div'
              initial={{ x: '5vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.1 }}>
              <h3 className='login-error'>Email Address or Password not found</h3>
            </motion.div>
          }
          <label className="login-label">Email</label>
          <input 
            className="register-input"
            placeholder="Email"
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="login-input">
          <label className="login-label">Password</label>
          <input 
            className="register-input"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            type="password"
          />
        </div>

        <button className="sign-in-button button is-info">Sign In</button>
      </form>
      <h1>Dont have an account? <a onClick={handleLogin}>Sign up here</a></h1>
    </div>
  )
}

export default Login

