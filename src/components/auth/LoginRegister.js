import React from 'react'
import Login  from './Login.js'
import Register from './Register.js'
import { motion } from 'framer-motion'

console.log(Login, Register)

function LoginRegister() {
  const [login, setLogin] = React.useState(true)
  return (
    <section className='auth-page'>
      <div className="auth-logo-div">
        <img className="auth-logo-image"src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1643249938/cod/pngaaa.com-665123_omjtgo.png"/>
      </div>
      <div className='auth-container'>
        { login &&
          <motion.div 
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.2 }}className='auth-section'>
            <div className='login-div'>
              <Login key={'login'}  setLogin={setLogin}/>
            </div>
          </motion.div>
        }
      </div>

      <div>
        { !login &&
          <motion.div 
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className='auth-section'>
            <div className='login-div'>
              <Register key={'register'}  setLogin={setLogin}/>
            </div>
          </motion.div>
        }
      </div>


    </section>
  )
}

export default LoginRegister