import React from 'react'
import { loginUser } from '../lib/api.js'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../lib/auth.js'

export const userId = []

function Login() {

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
      userId.push(data.userToLogin._id)
      console.log('userId', userId)
      navigate('/profile')
     
    } catch (err) {
      setIsError(true)
      console.log(isError)
      console.log('error', err)
    
    }
  }

  function handleRegister() {
    navigate('/register')
  }
  

  return (
    <div>
      <form 
        onSubmit={handleSubmit}
      >
        <div>
          <label className="label">Email</label>
          <input 
            className="register-input"
            placeholder="Email"
            onChange={handleChange}
            name="email"
          />
        </div>
        <div>
          <label className="label">Password</label>
          <input 
            className="register-input"
            placeholder="Password"
            onChange={handleChange}
            name="password"
          />
        </div>

        <button className="button is-info">Sign In</button>
      </form>

      <button 
        className="button is-info"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  )
}

export default Login

