import React from 'react'
import { getUser,  getAllUserGuns, editUser } from '../lib/api'
import UserWeaponCard from '../weapons/WeaponCards/UserWeaponCard.js'

function UserProfile() {

  const [user, setUser] = React.useState(null)
  const [weapons, setWeapon] = React.useState(null)
  const [click, setClick] = React.useState(false)
  const [isError, setIsError] = React.useState(null)
  const [formData, setFormData] = React.useState({
    image: null,
  })

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
   
    <section>
      { user && weapons && 
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
          <div className='column weapons-column is-one-fifth'>

          </div>

          <div className='column weapons-column is-four-fifths'>
            <div className='created-weapons'>
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

            <div className='created-weapons'>
              { 
                weapons && user && weapons.filter(
                  weapon => {
                    return weapon.likedBy.includes(user._id)
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
      </div>
      }
    </section>    
  )
}

export default UserProfile