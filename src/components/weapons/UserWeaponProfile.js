import React from 'react'
import { useParams } from 'react-router-dom'
import { getOneUserWeapon, favouriteClass, getUser, deleteClass } from '../lib/api.js'
import { isAuthenticated } from '../lib/auth.js'
import { useNavigate } from 'react-router-dom'






function WeaponProfile() {
  const [weapon, setWeapon] = React.useState(null)
  const [user, setUser] = React.useState(null)
  // const [flip, setFlip] = React.useState(true)
  const [isError, setIsError] = React.useState(false)
  const { userWeaponId, userId } = useParams()
  const isAuth = isAuthenticated()
  const navigate = useNavigate()


  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getOneUserWeapon(userWeaponId)
        setWeapon(response.data)
        const res = await getUser()
        setUser(res.data)
       
      } catch (err){
        setIsError(err)
        
      }
    }
    getData()
  }, [userWeaponId, userId])

  console.log('uuuuser', user)
  // console.log('flip', flip)

  const favouriteWeapon = async (e) => {

    if (e.target.textContent.includes('Add To Favourites')){
      e.target.textContent = 'Favourited'
    } else if (e.target.textContent.includes('Favourited')){
      e.target.textContent = 'Add To Favourites'
    }
    console.log(weapon)
    return favouriteClass(userWeaponId)

  }

  const deleteWeapon = () => {
    try {
      console.log('click')
      deleteClass(weapon._id)
      navigate('/userweapons')
      window.location.reload()
    } catch (err) {
      setIsError(err)
    }
  }

  console.log(weapon)

  console.log(deleteClass)


  console.log(isError)
  
  return (
    <section className='weapon-page'>
      { weapon &&
        <section className='profile'>
          <div className='header'>
            <div className='title'>
              <div><h1>{weapon.name}</h1></div>
              <div className="profile-and-create">

                {
                  isAuth && user && !weapon.likedBy.includes(user._id) && <button className='button is-info profile-select'
                    onClick={favouriteWeapon}
                  >Add To Favourites</button>
                }

                {
                  isAuth && user && weapon.likedBy.includes(user._id) && <button className='button is-info profile-select'
                    onClick={favouriteWeapon}
                  >Favourited</button>
                }

                {
                  isAuth && user && weapon.addedBy.includes(user._id) && <button className='button is-danger profile-select'
                    onClick={deleteWeapon}
                  >Delete This Class</button>
                }

                {
                  !isAuth && <button className='button is-info profile-select'>Login or Register to save this build</button>
                }

              </div>
            </div>
            <div className="weapon-image">
              <img src={weapon.image}/>
            </div>
          </div>
          {/* <div className='container'> */}

            
          <div className='weapon-profile'>
            <div className='weapon-stats'>

              <div className='stats-title'><h2>ATTACHMENTS</h2></div>
              <div className='stats'>
                <div className='stat-boxes'>
                  <div><h2>MOVEMENT</h2> </div>
                  <div>
                    {/* <h3>Movement Speed: {weapon.movementSpeed} Mph</h3>
                    <h3>Sprint Speed: {weapon.sprintSpeed} Mph</h3>
                    <h3>Tactical Sprint To Fire: {weapon.tacSprintToFire} Mph</h3>
                    <h3>ADS Movement Speed: {weapon.adsMovementSpeed} Ms</h3>
                    <h3>Strafe Speed: {weapon.strafeSpeed} Ms</h3> */}
                  </div>
                </div>
                <div>
                  <div className='stat-boxes'>
                    <div><h2>GUNFIGHT</h2></div>
                    <div>
                      {/* <h3>Rate of Fire: {getProfileStats().fireRate} RPM</h3>
                      <h3>ADS Time: {weapon.adsTime} Ms</h3>
                      <h3>Reload Time: {weapon.reloadTime} Ms</h3>
                      <h3>Hipfire Area: {weapon.hipfireArea} Ms</h3>
                      <h3>Bullet Velocity: {weapon.bulletVelocity} Meters per second</h3>
                      <h3>Magazine Size: {weapon.magSize} Ms</h3>
                      <h3>Open Bolt Delay: {weapon.openBoltDelay} Ms</h3> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
              
              

          </div> 

       
        </section>
      }
    </section>
  )

}

export default WeaponProfile