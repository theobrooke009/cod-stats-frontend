import React from 'react'
import { loginUser } from '../lib/api.js'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../lib/auth.js'


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
      console.log('data', data)
      setToken(data.token)
      navigate('/weapons')
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

