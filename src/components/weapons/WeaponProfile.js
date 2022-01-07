import React from 'react'
import { useParams } from 'react-router-dom'
import { getOneWeapon } from '../lib/api.js'
import DamageProfileCard from './DamageProfileCard.js'




function WeaponProfile() {
  const [weapon, setWeapon] = React.useState(null)
  // const [image, setImage] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const [profile, setProfile] = React.useState('Profile One')

  const { weaponId } = useParams()

  // function backgroundImage() {
  //   (weapon)
  //   setImage(weapon.image)
  // }


  console.log('check here', weapon)

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



  const setProfileStats = (e)=> {
    setProfile(e.target.value)
  }

  const getProfileStats = () => {
    if (weapon){
      if (profile && profile === 'Profile One') {
        return weapon.profileOne[0]
      }
      if ( profile && profile === 'Profile Two') {
        return weapon.profileTwo[0]
      }
      if (profile && profile === 'Profile Three') {
        return weapon.profileThree[0]
      }
      if (profile && profile === 'Profile Four') {
        return weapon.profileFour[0]
      }
      if (profile && profile === 'Profile Five') {
        return weapon.profileFive[0]
      }
      if (profile && profile === 'Profile Six') {
        return weapon.profileSix[0]
      }
    }
    return 0
  }

  console.log(isError)
  
  return (
    <>
      { weapon &&
        <section >
          <div className='title'>
            <h1>{weapon.name}</h1>
            <select className='profile-select dropdown button'
              onChange={setProfileStats}>
              { weapon.profileOne[0] &&
              <option value='Profile One'>{weapon.profileOne[0].profileName}</option>
              }
              { weapon.profileTwo[0] &&
              <option value='Profile Two'>{weapon.profileTwo[0].profileName}</option>
              }
              { weapon.profileThree[0] &&
              <option value>{weapon.profileThree[0].profileName}</option>
              }
              { weapon.profileFour[0] &&
              <option value>{weapon.profileFour[0].profileName}</option>
              }
              { weapon.profileFive[0] &&
              <option value>{weapon.profileFive[0].profileName}</option>
              }
            </select>
          </div>
          {/* <div className='container'> */}
          <div className='columns'>
            {weapon && 
              <div className='column is-one-fifth gun-stats' >

                <h3>ADS Time: {weapon.adsTime} Ms</h3>
                <h3>ADS Movement Speed: {weapon.adsMovementSpeed} Ms</h3>
                <h3>Strafe Speed: {weapon.strafeSpeed} Ms</h3>
                <h3>Reload Time: {weapon.reloadTime} Ms</h3>
                <h3>Hipfire Area: {weapon.hipfireArea} Ms</h3>
                <h3>Bullet Velocity: {weapon.bulletVelocity} Meters per second</h3>
                <h3>Movement Speed: {weapon.movementSpeed} Mph</h3>
                <h3>Sprint Speed: {weapon.sprintSpeed} Mph</h3>
                <h3>Sprint To Fire: {weapon.sprintToFire} Mph</h3>
                <h3>Tactical Sprint To Fire: {weapon.tacSprintToFire} Mph</h3>
                <h3>Open Bolt Delay: {weapon.openBoltDelay} Ms</h3>
                <h3>Magazine Size: {weapon.magSize} Ms</h3>
              </div>
            }

            <div className=' column is-four-fifths weapon-profile'>
              <div className='columns rate-of-fire'>
                <div className='column is-full'>
                  {
                    weapon &&  <h3>Rate of Fire: {getProfileStats().fireRate}</h3>
                  }
                </div>
              </div>

              <div className='damage-profiles'>
                {
                  weapon && getProfileStats().rangeOne[0] &&
                
                  <div className='range-component'>
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
                
                  <div>
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
                  <div>
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
              
                  <div>
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
              <div>
                <img src={weapon.image}/>

              </div>
            
            </div> 
          </div>
          {/* </div> */}
        </section>
      }
    </>
  )

}

export default WeaponProfile