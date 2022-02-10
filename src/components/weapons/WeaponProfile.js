import React from 'react'
import { useParams } from 'react-router-dom'
import { getOneWeapon } from '../lib/api.js'
import DamageProfileCard from './DamageProfileCard.js'
import { isAuthenticated } from '../lib/auth.js'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'




function WeaponProfile() {
  const [weapon, setWeapon] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const [profile, setProfile] = React.useState('Profile One')
  const { weaponId } = useParams()
  const isAuth = isAuthenticated()

  const navigate = useNavigate()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getOneWeapon(weaponId)
        setWeapon(response.data)
       
      } catch (err){
        setIsError(err)
        
      }
    }
    getData()
  }, [weaponId])

  function handleCreateClass() {
    navigate(`/weapons/${weapon._id}/build`)
  }

  const setProfileStats = (e)=> {
    setProfile(e.target.value)
  }

  function handleLogin() {
    navigate('/')
  }



  const getProfileStats = () => {
    if (weapon && profile){
      switch (profile) {
        case 'Profile One': return weapon.profileOne[0] 
               
        case 'Profile Two': return weapon.profileTwo[0]

        case 'Profile Three': return weapon.profileThree[0]
  
        case 'Profile Four': return weapon.profileFour[0]
   
        case 'Profile Five': return weapon.profileFive[0]

        case 'Profile Six': return weapon.profileSix[0]
      }
    }
    return 0
  }

  console.log(isError)
  
  return (
    <motion.section className='weapon-page'
      initial={{ y: '100vh', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}>
      { weapon &&
        <section className='individual-profile'
        >
          <div className='header'>
            <div className='title'>
              <div><h1 className='mobile-weapon-name'>{weapon.name}</h1></div>
              <div className="mobile-weapon-image">
                <motion.img src={weapon.image}
                  initial={{  opacity: 0 }}
                  animate={{  opacity: 1 }}
                  transition={{ delay: 1, duration: 0.25 }}/>
              </div>
              <div className="profile-and-create">
                <select className='profile-select dropdown button'
                  onChange={setProfileStats}>
                  <option value='Profile One'>Select Damage Profile</option>
                  { weapon.profileOne[0] &&
              <option value='Profile One'>{weapon.profileOne[0].profileName}</option>
                  }
                  { weapon.profileTwo[0] &&
              <option value='Profile Two'>{weapon.profileTwo[0].profileName}</option>
                  }
                  { weapon.profileThree[0] &&
              <option value='Profile Three'>{weapon.profileThree[0].profileName}</option>
                  }
                  { weapon.profileFour[0] &&
              <option value='Profile Four'>{weapon.profileFour[0].profileName}</option>
                  }
                  { weapon.profileFive[0] &&
              <option value='Profile Five'>{weapon.profileFive[0].profileName}</option>
                  }
                </select>

                {
                  isAuth && <button className='button profile-select'
                    onClick={handleCreateClass}
                  >Create A Class</button>
                }

                {
                  !isAuth && <button onClick={handleLogin}className='button wp-no-auth is-black'>Login or Register to create your own build</button>
                }

              </div>
            </div>
            
            <div className="profile-weapon-image">
              <motion.img src={weapon.image}
                initial={{  opacity: 0 }}
                animate={{  opacity: 1 }}
                transition={{ delay: 1, duration: 0.25 }}/>
            </div>
          </div>
          <div className='weapon-profile'>
            <div className='scrollable'>
              <div className='weapon-stats'>

                <div className='stats-title'><h2>WEAPON STATS</h2></div>
                <div className='stats columns'>
                  <div className='stat-boxes column is-half'>
                    <div><h2>MOVEMENT</h2> </div>
                    <div>
                      <h3>Movement Speed: {weapon.movementSpeed} Mph</h3>
                      <h3>Sprint Speed: {weapon.sprintSpeed} Mph</h3>
                      <h3>Tactical Sprint To Fire: {weapon.tacSprintToFire} Mph</h3>
                      <h3>ADS Movement Speed: {weapon.adsMovementSpeed} Ms</h3>
                      <h3>Strafe Speed: {weapon.strafeSpeed} Ms</h3>
                    </div>
                  </div>
                  <div>
                    <div className='stat-boxes column is-half'>
                      <div><h2>GUNFIGHT</h2></div>
                      <div>
                        <h3>Rate of Fire: {getProfileStats().fireRate} RPM</h3>
                        <h3>ADS Time: {weapon.adsTime} Ms</h3>
                        <h3>Reload Time: {weapon.reloadTime} Ms</h3>
                        <h3>Hipfire Area: {weapon.hipfireArea} Ms</h3>
                        <h3>Bullet Velocity: {weapon.bulletVelocity} Meters per second</h3>
                        <h3>Magazine Size: {weapon.magSize} Ms</h3>
                        <h3>Open Bolt Delay: {weapon.openBoltDelay} Ms</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              
              <div className="range-stats">
                <div className='stats-title'><h2>RANGE STATS</h2></div>
                <div className='stats'>
                  <div className='columns range-boxes'>
                    {
                      weapon && getProfileStats().rangeOne[0] &&
                
                  <div className='column range-component'>
                    {
                      getProfileStats().rangeOne.map(
                        profile => (
                          <DamageProfileCard key={profile._id} profile={profile}/>
                        )   
                      )
                    }
                  </div>
                
                    }
                    {
                      weapon && getProfileStats().rangeTwo[0] &&
                
                  <div className='column range-component'>
                    {
                      getProfileStats().rangeTwo.map(
                        profile => (
                          <DamageProfileCard key={profile._id} profile={profile}/>
                        )   
                      )
                    }
                  </div>
                    }
                    {
                      weapon && getProfileStats().rangeThree[0] &&
                  <div className='column range-component'>
                    {
                      getProfileStats().rangeThree.map(
                        profile => (
                          <DamageProfileCard key={profile._id} profile={profile}/>
                        )   
                      )
                    }
                  </div>
              
                    }

                    {
                      weapon && getProfileStats().rangeFour[0] &&
              
                  <div className='column range-component'>
                    {
                      getProfileStats().rangeFour.map(
                        profile => (
                          <DamageProfileCard key={profile._id} profile={profile}/>
                        )   
                      )
                    }
                  </div>
                    }  
                  </div>            
                </div>
              </div>
            </div>
          </div> 

       
        </section>
      }
    </motion.section>
  )

}

export default WeaponProfile