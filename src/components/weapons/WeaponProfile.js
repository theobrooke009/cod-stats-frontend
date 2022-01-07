import React from 'react'
import { useParams } from 'react-router-dom'
import { getOneWeapon } from '../lib/api.js'



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


  console.log(weapon)





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

  // backgroundImage()

  const setProfileStats = (e)=> {
    setProfile(e.target.value)
  }

  const getProfileStats = () => {
    if (weapon){
      if (profile && profile === 'Profile One') {
        console.log('function call', weapon.profileOne[0])
        return weapon.profileOne[0]
      }
      if ( profile && profile === 'Profile Two') {
        console.log('function call', weapon.profileTwo[0])
        return weapon.profileTwo[0]
      }
      if (profile && profile === 'Profile Three') {
        console.log('function call', weapon.profileThree[0])
        return weapon.profileThree[0]
      }
      if (profile && profile === 'Profile Four') {
        console.log('function call', weapon.profileFour[0])
        return weapon.profileFour[0]
      }
      if (profile && profile === 'Profile Five') {
        console.log('function call', weapon.profileFive[0])
        return weapon.profileFive[0]
      }
      if (profile && profile === 'Profile Six') {
        console.log('function call', weapon.profileSix[0])
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
            <select
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
          <div className='weapon-profile'>
            <div className='damage-profiles'>
              
              {weapon && getProfileStats().rangeOne[0] && 
              <div className='damage-ranges'>
                
                <div className='damage-range'>
                  <h1 className='damage-range'>Range Start:  {getProfileStats().rangeOne[0].rangeStart}</h1>
                </div>
                
                {weapon && getProfileStats().rangeOne[0] &&
                <div className='damage-range'>
                  
                  <h1 className='damage-range'>Range End:  {getProfileStats().rangeOne[0].rangeEnd}</h1>
                </div>
                }

                <div className='damage-areas'>
                  <h3 className='damage-range'>Head Damage: {getProfileStats().rangeOne[0].headDamage}</h3>

                  <h3 className='damage-range'>Neck Damage: {getProfileStats().rangeOne[0].neckDamage}</h3>

                  <h3 className='damage-range'>Chest Damage: {getProfileStats().rangeOne[0].chestDamage}</h3>

                  <h3 className='damage-range'>Stomach Damage: {getProfileStats().rangeOne[0].stomachDamage}</h3>

                  <h3 className='damage-range'>Extremeties Damage: {getProfileStats().rangeOne[0].extremetiesDamage}</h3>
                </div>
              </div>
              }

              {weapon && getProfileStats().rangeTwo[0] && 
              <div className='damage-ranges'>
              
                <div className='damage-range'>
                  <h1 className='damage-range'>Range Start: {getProfileStats().rangeTwo[0].rangeStart} {weapon && getProfileStats().rangeTwo[0] && getProfileStats().rangeTwo[0].rangeEnd > 300 && <p>+</p>} </h1>
                </div>
                
                {weapon && getProfileStats().rangeTwo[0] && getProfileStats().rangeTwo[0].rangeEnd < 300 &&
                <div className='damage-range'>
                  <h1 className='damage-range'>Range End: {getProfileStats().rangeTwo[0].rangeEnd}</h1>
                </div>
                }

                <div className='damage-areas'>
                  <h3 className='damage-range'>Head Damage: {getProfileStats().rangeTwo[0].headDamage}</h3>

                  <h3 className='damage-range'>Neck Damage: {getProfileStats().rangeTwo[0].neckDamage}</h3>

                  <h3 className='damage-range'>Chest Damage: {getProfileStats().rangeTwo[0].chestDamage}</h3>

                  <h3 className='damage-range'>Stomach Damage: {getProfileStats().rangeTwo[0].stomachDamage}</h3>

                  <h3 className='damage-range'>Extremeties Damage: {getProfileStats().rangeTwo[0].extremetiesDamage}</h3>
                </div>
              </div>
              }

              {weapon && getProfileStats().rangeThree[0] && 
              <div className='damage-ranges'>
               
                <div className='damage-range'>
                  <h1 className='damage-range'>Range Start: {getProfileStats().rangeThree[0].rangeStart} {weapon && getProfileStats().rangeThree[0] && getProfileStats().rangeThree[0].rangeEnd > 300 && <p>+</p>} </h1>
                </div>
                
                {weapon && getProfileStats().rangeThree[0] && getProfileStats().rangeThree[0].rangeEnd < 300 &&
                <div>
                  <h1 className='damage-range'>Range End: {getProfileStats().rangeThree[0].rangeEnd}</h1>
                </div>
                }

                <div className='damage-areas'>
                  <h3 className='damage-range'>Head Damage: {getProfileStats().rangeThree[0].headDamage}</h3>

                  <h3 className='damage-range'>Neck Damage: {getProfileStats().rangeThree[0].neckDamage}</h3>

                  <h3 className='damage-range'>Chest Damage: {getProfileStats().rangeThree[0].chestDamage}</h3>

                  <h3 className='damage-range'>Stomach Damage: {getProfileStats().rangeThree[0].stomachDamage}</h3>

                  <h3 className='damage-range'>Extremeties Damage: {getProfileStats().rangeThree[0].extremetiesDamage}</h3>
                </div>
              </div>
              }

              {weapon && getProfileStats().rangeFour[0] && 
              <div className='damage-ranges'>
                
                <div>
                  <h1 className='damage-range'>Range Start: {getProfileStats().rangeFour[0].rangeStart} {weapon && getProfileStats().rangeFour[0] && getProfileStats().rangeFour[0].rangeEnd > 300 && <p>+</p>} </h1>
                </div>
                
                {weapon && getProfileStats().rangeFour[0] && getProfileStats().rangeFour[0].rangeEnd < 300 &&
                <div>
                  <h1 className='damage-range'>Range End: - {getProfileStats().rangeFour[0].rangeEnd}</h1>
                </div>
                }

                <div className='damage-areas'>
                  <h3 className='damage-range'>Head Damage: {getProfileStats().rangeFour[0].headDamage}</h3>

                  <h3 className='damage-range'>Neck Damage: {getProfileStats().rangeFour[0].neckDamage}</h3>

                  <h3 className='damage-range'>Chest Damage: {getProfileStats().rangeFour[0].chestDamage}</h3>

                  <h3 className='damage-range'>Stomach Damage: {getProfileStats().rangeFour[0].stomachDamage}</h3>

                  <h3 className='damage-range'>Extremeties Damage: {getProfileStats().rangeFour[0].extremetiesDamage}</h3>
                </div>

                
              </div>
              }
                
              
            </div>
            <img src={weapon.image}/>
          </div> 
        </section>
      }
    </>
  )

}

export default WeaponProfile