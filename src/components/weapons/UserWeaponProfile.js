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
        <section className='individual-profile'>
          <div className='user-weapon-profile-header'>
            <div className='title'>
              <div><h1>{weapon.name}</h1></div>
              <div><h4>{weapon.gunName.toUpperCase()} - {weapon.weaponType.toUpperCase()}</h4></div>
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

            
          <div className='user-weapon-profile'>
            <div className='weapon-stats'>
              <div className='stats'>
                <div className='user-added-attachments'>
                  <div className='stats-title'><h2>ATTACHMENTS</h2></div>

                  { weapon && weapon.muzzle !== 'None' && 
                  <div className='user-attachments'>
                    <h1>MUZZLE</h1>
                    <h3> {weapon.muzzle}</h3>
                  </div>
                  
                  }

                  { weapon && weapon.laser !== 'None' && 
                  <div className='user-attachments'>
                    <h1>LASER</h1>
                    <h3> {weapon.laser}</h3>
                  </div>
                  
                  }

                  { weapon && weapon.barrel !== 'None' && 
                  <div className='user-attachments'>
                    <h1>BARREL</h1>
                    <h3> {weapon.barrel}</h3>
                  </div>
                  
                  }

                  { weapon && weapon.optic !== 'None' && 
                  <div className='user-attachments'>
                    <h1>OPTIC</h1>
                    <h3> {weapon.optic}</h3>
                  </div>
                  
                  }

                  { weapon && weapon.stock !== 'None' && 
                         <div className='user-attachments'>
                           <h1>STOCK</h1>
                           <h3> {weapon.stock}</h3>
                         </div>
                  }

                  { weapon && weapon.underBarrel !== 'None' && 
                         <div className='user-attachments'>
                           <h1>UNDERBARREL</h1>
                           <h3> {weapon.underBarrel}</h3>
                         </div>
                  }

                  { weapon && weapon.profile !== 'None' && weapon.profile !== 'Default' && 
                         <div className='user-attachments'>
                           <h1>AMMO</h1>
                           <h3> {weapon.profile}</h3>
                         </div>
                  }

                  { weapon && weapon.perk !== 'None' && 
                         <div className='user-attachments'>
                           <h1>PERK</h1>
                           <h3> {weapon.perk}</h3>
                         </div>
                  }

                  { weapon && weapon.rearGrip !== 'None' && 
                         <div className='user-attachments'>
                           <h1>GRIP</h1>
                           <h3> {weapon.rearGrip}</h3>
                         </div>
                  }
                </div>

                <div>
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