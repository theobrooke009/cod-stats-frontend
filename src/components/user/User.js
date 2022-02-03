import React from 'react'
import { Link } from 'react-router-dom'
import { getUser,  getAllUserGuns, editUser } from '../lib/api'
import { isAuthenticated } from '../lib/auth'
import UserWeaponCard from '../weapons/WeaponCards/UserWeaponCard.js'
import LoginRegister from '../auth/LoginRegister'

function UserProfile() {

  const [user, setUser] = React.useState(null)
  const [weapons, setWeapon] = React.useState(null)
  const [click, setClick] = React.useState(false)
  const [isError, setIsError] = React.useState(null)
  const [formData, setFormData] = React.useState({
    image: null,
  })

  const isAuth = isAuthenticated()
  console.log(isError, weapons, editUser)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getUser()
        const res = await getAllUserGuns()

        setUser(response.data)
        setWeapon(res.data)
  
      } catch (err) {
        setIsError(err)
      }
    }
    getData()
  }, [])


  const onClick = () => {
    setClick(!click)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await editUser(user._id, formData)
      console.log('this is the data', data)
      window.location.reload()
    } catch (err) {
      console.log(err)
      setIsError(err)
    }
  }
  return (
   
    <section className='profile-section'>
      {
        !isAuth &&
        <>        
          <LoginRegister/>
        </>
      }

      { user && weapons && isAuth &&
      <div>
        <div className='profile-header columns'>
          <div className='profile-image column is-one-fifth'>
            <img className='user-image' src={user.image}/>
          
            <button className='button is-black' onClick={onClick}>
              { !click &&
              <p>Change Profile Image</p>
              }
              {
                click && 
              <p>Cancel</p>
              }
            
            </button>
          
            <div className='image-change'>
              { click &&
              <form className='image-form'
                onSubmit={handleSubmit}>
                <input placeholder='paste in image url'
                  name='image'
                  onChange={handleChange}
                ></input>
                <button type="submit" className='button is-black'>Submit</button>
              </form>
              }
            </div>
          
          </div>
          <div className="user-name-header column is-four-fifths">
            <div>
              <h1>{user.username.toUpperCase()}</h1>
            </div>
            { weapons &&
              <div>
                {  weapons && user && weapons.filter(
                  weapon => {
                    return weapon.addedBy === user._id
                  }
                ).length > 0 &&
                <h3>{user.username} has created {weapons.filter(
                  weapon => {
                    return weapon.addedBy === user._id
                  }
                ).length} classes</h3>
                }

                { weapons && user && weapons.filter(
                  weapon => {
                    return weapon.addedBy === user._id
                  }
                ).length === 0 &&
                <h3>{user.username} hasnt created any classes yet</h3>
                }
              </div>
            }
          </div>
        </div>

        <div className='profile-user-weapons columns'>


          <div className='column weapons-colum'>
            <div className='profile-link-buttons'>
              <Link to={'/weapons'}>
                <button className='button is-black' >Build Your Own Class</button>
              </Link>
              <Link to={'/userweapons'}>
                <button className='button is-black' >Find More User Classes</button>
              </Link>
            </div>
            <div className='created-and-favourited columns'>
              <div className='user-made-weapons column'>
                <div className='user-created-weapons'>
                  <div className='created-title'>
                    <h3>Created Classes  &#9658; </h3>
                  </div>
                  <div className='created-weapons-container'>
                    { 
                      weapons && user && weapons.filter(
                        weapon => {
                          return weapon.addedBy === user._id
                        }
                      ).map(
                        weapon => (
                          <UserWeaponCard  key={weapon._id} weapon={weapon} />
                        )
                      )
                    }
                  </div>
                </div>
              </div>

              <div className='user-made-weapons column'>
                <div className='user-created-weapons'>
                  <div className='created-title'>
                    <h3>Favourited Classes  &#9658;</h3>
                  </div>
                  <div className='created-weapons-container'>
                    { 
                      weapons && user && weapons.filter(
                        weapon => {
                          return weapon.likedBy.includes(user._id)
                        }
                      ).map(
                        weapon => (
                          <UserWeaponCard  key={weapon.name} weapon={weapon} />
                        )
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
              
            {/* <div>
              <h3>Liked Weapons</h3>
              <Link to={'/userweapons'}>
                <button className='button is-black' >Find More User Classes</button>
              </Link>
              <div className='created-weapons'>
                  <div>
                { 
                  weapons && user && weapons.filter(
                    weapon => {
                      return weapon.likedBy.includes(user._id)
                    }
                  ).map(
                    weapon => (
                      <UserWeaponCard  key={weapon._id} weapon={weapon}/>
                    )
                  )
                }
              
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
      }
    </section>    
  )
}

export default UserProfile