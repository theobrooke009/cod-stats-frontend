import React from 'react'
import { getOneWeapon } from '../lib/api.js'
import { getAllAttachments } from '../lib/api.js'
import { useParams } from 'react-router-dom'
import DamageProfileCard from './DamageProfileCard.js'



function CreateAClass() {
  const [weapon, setWeapon] = React.useState(null)
  const [attachments, setAttachments] = React.useState(null)
  const [muzzle, setMuzzle] = React.useState()
  const [laser, setLaser] = React.useState(null)
  const [ads, setAds] = React.useState(null)
  const [adsModifier, setAdsModifier] = React.useState({
    muzzleAds: 0,
    laserAds: 0,
    barrelAds: 0,
    opticAds: 0,
    stockAds: 0,
    perkAds: 0,
    ammoAds: 0,
    gripAds: 0,
  })
  const [rangeModifier, setRangeModifier] = React.useState({
    muzzleRange: 0,
    laserRange: 0,
    barrelRange: 0,
    opticRange: 0,
    stockRange: 0,
    perkRange: 0,
    ammoRange: 0,
    gripRange: 0,
  })

  const [bulletVelMod, setBulletVelMod] = React.useState({
    muzzleVel: 0,
    laserVel: 0,
    barrelVel: 0,
    opticVel: 0,
    stockVel: 0,
    perkVel: 0,
    ammoVel: 0,
    gripVel: 0,
  })

  const [vertRecoil, setVertRecoil] = React.useState({
    muzzleVert: 0,
    laserVert: 0,
    barrelVert: 0,
    opticVert: 0,
    stockVert: 0,
    perkVert: 0,
    ammoVert: 0,
    gripVert: 0,
  })

  const [horizRecoil, setHorizRecoil] = React.useState({
    muzzleHoriz: 0,
    laserHoriz: 0,
    barrelHoriz: 0,
    opticHoriz: 0,
    stockHoriz: 0,
    perkHoriz: 0,
    ammoHoriz: 0,
    gripHoriz: 0,
  })

  const [movSpeed, setMovSpeed] = React.useState({
    muzzleMov: 0,
    laserMov: 0,
    barrelMov: 0,
    opticMov: 0,
    stockMov: 0,
    perkMov: 0,
    ammoMov: 0,
    gripMov: 0,
  })

  const [adsMovSpeed, setAdsMovSpeed] = React.useState({
    muzzleAdsMov: 0,
    laserAdsMov: 0,
    barrelAdsMov: 0,
    opticAdsMov: 0,
    stockAdsMov: 0,
    perkAdsMov: 0,
    ammoAdsMov: 0,
    gripAdsMov: 0,
  })

  const [sprintSpeed, setSprintSpeed] = React.useState({
    muzzleSprintSpeed: 0,
    laserSprintSpeed: 0,
    barrelSprintSpeed: 0,
    opticSprintSpeed: 0,
    stockSprintSpeed: 0,
    perkSprintSpeed: 0,
    ammoSprintSpeed: 0,
    gripSprintSpeed: 0,
  })

  const [magSize, setMagSize] = React.useState({
    muzzleMag: 0,
    laserMag: 0,
    barrelMag: 0,
    opticMag: 0,
    stockMag: 0,
    perkMag: 0,
    ammoMag: 0,
    gripMag: 0,
  })

  const [hipFire, setHipFire] = React.useState({
    muzzleHipFire: 0,
    laserHipFire: 0,
    barrelHipFire: 0,
    opticHipFire: 0,
    stockHipFire: 0,
    perkHipFire: 0,
    ammoHipFire: 0,
    gripHipFire: 0,
  })

  const [sprintToFire, setSprintToFire] = React.useState({
    muzzleSprintToFire: 0,
    laserSprintToFire: 0,
    barrelSprintToFire: 0,
    opticSprintToFire: 0,
    stockSprintToFire: 0,
    perkSprintToFire: 0,
    ammoSprintToFire: 0,
    gripSprintToFire: 0,
  })

  const [tacSprint, setTacSprint] = React.useState({
    muzzleTacSprint: 0,
    laserTacSprint: 0,
    barrelTacSprint: 0,
    opticTacSprint: 0,
    stockTacSprint: 0,
    perkTacSprint: 0,
    ammoTacSprint: 0,
    gripTacSprint: 0,
  })

  const [reloadTime, setReloadTime] = React.useState({
    muzzleReload: 0,
    laserReload: 0,
    barrelReload: 0,
    opticReload: 0,
    stockReload: 0,
    perkReload: 0,
    ammoReload: 0,
    gripReload: 0,
  })


  const [strafe, setStrafe] = React.useState({
    muzzleStrafe: 0,
    laserStrafe: 0,
    barrelStrafe: 0,
    opticStrafe: 0,
    stockStrafe: 0,
    perkStrafe: 0,
    ammoStrafe: 0,
    gripStrafe: 0,
  })

  
  const [barrel, setBarrel] = React.useState(null)
  const [part, setPart] = React.useState('')
  const [isError, setIsError] = React.useState(false)
  const [profile, setProfile] = React.useState('Profile One')
  const { weaponId } = useParams()

  console.log(part, setPart, isError,  muzzle, sprintSpeed, reloadTime, setSprintSpeed, bulletVelMod, setBulletVelMod, setMuzzle, laser, setLaser, barrel, setBarrel, ads, setAds, rangeModifier, adsMovSpeed, movSpeed, setMovSpeed, setRangeModifier, vertRecoil, setVertRecoil, horizRecoil, setHorizRecoil, magSize, hipFire, sprintToFire, tacSprint, strafe, setAdsModifier)

  console.log('ADS', adsModifier)

  let selectMuzzle = {}
  let selectLaser = {}
  let selectBarrel = {}
  

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getOneWeapon(weaponId)
        setWeapon(response.data)
        setAds(response.data.adsTime)
      } catch (err) {
        setIsError(err)
      }
    }
    getData()
  }, [weaponId])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllAttachments()
        setAttachments(response.data)
      } catch (err) {
        setIsError(err)
      }
    }
    getData()
  }, [])

  //Muzzle Functions

  function getMuzzle() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Muzzle'
        }
      )
    }
    return 0
  }


  function oneMuzzle(e) {
    if (attachments && weapon) {
      const selectedMuzzle = attachments.filter(
        attachment => {
          return  attachment.weapons.includes(weapon.name) && attachment.attachmentName.includes(e.target.innerHTML)
          
        }
      )

      selectMuzzle = selectedMuzzle 

      if (selectMuzzle[0].adsModifier){
        setAdsModifier(
          { ...adsModifier, muzzleAds: selectMuzzle[0].adsModifier }
        )
      } else (adsModifier.muzzleAds = 0)

      if (selectMuzzle[0].rangeModifier){
        setRangeModifier({
          ...rangeModifier, muzzleRange: selectMuzzle[0].rangeModifier,
        })
      } else (rangeModifier.muzzleRange = 0)

      if (selectMuzzle[0].bulletVelocityModifier) {
        setBulletVelMod({
          ...bulletVelMod, muzzleVel: selectMuzzle[0].bulletVelocityModifier,
        })
      } else (bulletVelMod.muzzleVel = 0)

      if (selectMuzzle[0].verticalRecoil) {
        setVertRecoil({
          ...vertRecoil, muzzleVert: selectMuzzle[0].verticalRecoil,
        })
      } else (vertRecoil.muzzleVert = 0)

      if (selectMuzzle[0].horizontalRecoil) {
        setHorizRecoil({
          ...horizRecoil, muzzleHoriz: selectMuzzle[0].horizontalRecoil,
        })
      } else (horizRecoil.muzzleHoriz = 0)

      if (selectMuzzle[0].movementSpeed) {
        setMovSpeed({
          ...movSpeed, muzzleMov: selectMuzzle[0].movementSpeed,
        })
      } else (movSpeed.muzzleMov = 0)

      if (selectMuzzle[0].adsMovementSpeed) {
        setAdsMovSpeed({
          ...adsMovSpeed, muzzleAdsMov: selectMuzzle[0].adsMovementSpeed,
        })
      } else (adsMovSpeed.muzzleAdsMov = 0 )

      if (selectMuzzle[0].sprintSpeed) {
        setSprintSpeed({
          ...sprintSpeed, muzzleSprintSpeed: selectMuzzle[0].sprintSpeed,
        })
      } else (sprintSpeed.muzzleSprintSpeed = 0)
      
      if (selectMuzzle[0].magSize) {
        setMagSize({
          ...magSize, muzzleMag: selectMuzzle[0].magSize,
        })
      } else (magSize.muzzleMag = 0)

      if (selectMuzzle[0].hipfireArea) {
        setHipFire({
          ...hipFire, muzzleHipFire: selectMuzzle[0].hipfireArea,
        })
      } else (hipFire.muzzleHipFire = 0)

      if (selectMuzzle[0].sprintToFire) {
        setSprintToFire({
          ...sprintToFire, muzzleSprintToFire: selectMuzzle[0].sprintToFire,
        })
      } else (sprintToFire.muzzleSprintToFire = 0)

      if (selectMuzzle[0].tacSprintToFire) {
        setTacSprint({
          ...tacSprint, muzzleTacSprint: selectMuzzle[0].tacSprintToFire,
        })
      } else (tacSprint.muzzleTacSprint = 0)

      if (selectMuzzle[0].reloadTime) {
        setReloadTime({
          ...reloadTime, muzzleReload: selectMuzzle[0].reloadTime,
        })
      } else (reloadTime.muzzleReload = 0)

      if (selectMuzzle[0].strafeSpeed) {
        setStrafe({
          ...strafe, muzzleStrafe: selectMuzzle[0].strafeSpeed,
        })
      } else (strafe.muzzleStrafe = 0)
      return selectedMuzzle
    } 

    return 0
  }




  //Laser Functions

  function getLaser() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Laser'
        }
      )
    }
    return 0
  }

  function oneLaser(e) {
    if (attachments && weapon) {
      const selectedLaser = attachments.filter(
        attachment => {
          return  attachment.weapons.includes(weapon.name) && attachment.attachmentName.includes(e.target.innerHTML)
          
        }
      )

      selectLaser = selectedLaser
      if (selectLaser[0].adsModifier){
        setAdsModifier(
          { ...adsModifier, laserAds: selectLaser[0].adsModifier }
        )
      } else (adsModifier.laserAds = 0)

      if (selectLaser[0].rangeModifier){
        setRangeModifier({
          ...rangeModifier, laserRange: selectLaser[0].rangeModifier,
        })
      } else (rangeModifier.laserRange = 0)

      if (selectLaser[0].bulletVelocityModifier) {
        setBulletVelMod({
          ...bulletVelMod, laserVel: selectLaser[0].bulletVelocityModifier,
        })
      } else (bulletVelMod.laserVel = 0)

      if (selectLaser[0].verticalRecoil) {
        setVertRecoil({
          ...vertRecoil, laserVert: selectLaser[0].verticalRecoil,
        })
      } else (vertRecoil.laserVert = 0)

      if (selectLaser[0].horizontalRecoil) {
        setHorizRecoil({
          ...horizRecoil, laserHoriz: selectLaser[0].horizontalRecoil,
        })
      } else (horizRecoil.laserHoriz = 0)

      if (selectLaser[0].movementSpeed) {
        setMovSpeed({
          ...movSpeed, laserMov: selectLaser[0].movementSpeed,
        })
      } else (movSpeed.laserMov = 0)

      if (selectLaser[0].adsMovementSpeed) {
        setAdsMovSpeed({
          ...adsMovSpeed, laserAdsMov: selectLaser[0].adsMovementSpeed,
        })
      } else (adsMovSpeed.laserAdsMov = 0 )

      if (selectLaser[0].sprintSpeed) {
        setSprintSpeed({
          ...sprintSpeed, laserSprintSpeed: selectLaser[0].sprintSpeed,
        })
      } else (sprintSpeed.laserSprintSpeed = 0)
      
      if (selectLaser[0].magSize) {
        setMagSize({
          ...magSize, laserMag: selectLaser[0].magSize,
        })
      } else (magSize.laserMag = 0)

      if (selectLaser[0].hipfireArea) {
        setHipFire({
          ...hipFire, laserHipFire: selectLaser[0].hipfireArea,
        })
      } else (hipFire.laserHipFire = 0)

      if (selectLaser[0].sprintToFire) {
        setSprintToFire({
          ...sprintToFire, laserSprintToFire: selectLaser[0].sprintToFire,
        })
      } else (sprintToFire.laserSprintToFire = 0)

      if (selectLaser[0].tacSprintToFire) {
        setTacSprint({
          ...tacSprint, laserTacSprint: selectLaser[0].tacSprintToFire,
        })
      } else (tacSprint.laserTacSprint = 0)

      if (selectLaser[0].reloadTime) {
        setReloadTime({
          ...reloadTime, laserReload: selectLaser[0].reloadTime,
        })
      } else (reloadTime.laserReload = 0)

      if (selectLaser[0].strafeSpeed) {
        setStrafe({
          ...strafe, laserStrafe: selectLaser[0].strafeSpeed,
        })
      } else (strafe.laserStrafe = 0)

      return selectedLaser
    } 


    return 0
  }

  //barrel functions

  function getBarrel() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Barrel'
        }
      )
    }
    return 0
  }

  function oneBarrel(e) {
    if (attachments && weapon) {
      const selectedBarrel = attachments.filter(
        attachment => {
          return  attachment.weapons.includes(weapon.name) && attachment.attachmentName.includes(e.target.innerHTML)
          
        }
      )

      selectBarrel = selectedBarrel
      if (selectBarrel[0].adsModifier){
        setAdsModifier(
          { ...adsModifier, barrelAds: selectBarrel[0].adsModifier }
        )
      } else (adsModifier.barrelAds = 0)

      if (selectBarrel[0].rangeModifier){
        setRangeModifier({
          ...rangeModifier, barrelRange: selectBarrel[0].rangeModifier,
        })
      } else (rangeModifier.barrelRange = 0)

      if (selectBarrel[0].bulletVelocityModifier) {
        setBulletVelMod({
          ...bulletVelMod, barrelVel: selectBarrel[0].bulletVelocityModifier,
        })
      } else (bulletVelMod.barrelVel = 0)

      if (selectBarrel[0].verticalRecoil) {
        setVertRecoil({
          ...vertRecoil, barrelVert: selectBarrel[0].verticalRecoil,
        })
      } else (vertRecoil.barrelVert = 0)

      if (selectBarrel[0].horizontalRecoil) {
        setHorizRecoil({
          ...horizRecoil, barrelHoriz: selectBarrel[0].horizontalRecoil,
        })
      } else (horizRecoil.barrelHoriz = 0)

      if (selectBarrel[0].movementSpeed) {
        setMovSpeed({
          ...movSpeed, barrelMov: selectBarrel[0].movementSpeed,
        })
      } else (movSpeed.barrelMov = 0)

      if (selectBarrel[0].adsMovementSpeed) {
        setAdsMovSpeed({
          ...adsMovSpeed, barrelAdsMov: selectBarrel[0].adsMovementSpeed,
        })
      } else (adsMovSpeed.barrelAdsMov = 0 )

      if (selectBarrel[0].sprintSpeed) {
        setSprintSpeed({
          ...sprintSpeed, barrelSprintSpeed: selectBarrel[0].sprintSpeed,
        })
      } else (sprintSpeed.barrelSprintSpeed = 0)
      
      if (selectBarrel[0].magSize) {
        setMagSize({
          ...magSize, barrelMag: selectBarrel[0].magSize,
        })
      } else (magSize.barrelMag = 0)

      if (selectBarrel[0].hipfireArea) {
        setHipFire({
          ...hipFire, barrelHipFire: selectBarrel[0].hipfireArea,
        })
      } else (hipFire.barrelHipFire = 0)

      if (selectBarrel[0].sprintToFire) {
        setSprintToFire({
          ...sprintToFire, barrelSprintToFire: selectBarrel[0].sprintToFire,
        })
      } else (sprintToFire.barrelSprintToFire = 0)

      if (selectBarrel[0].tacSprintToFire) {
        setTacSprint({
          ...tacSprint, barrelTacSprint: selectBarrel[0].tacSprintToFire,
        })
      } else (tacSprint.barrelTacSprint = 0)

      if (selectBarrel[0].reloadTime) {
        setReloadTime({
          ...reloadTime, barrelReload: selectBarrel[0].reloadTime,
        })
      } else (reloadTime.barrelReload = 0)

      if (selectBarrel[0].strafeSpeed) {
        setStrafe({
          ...strafe, barrelStrafe: selectBarrel[0].strafeSpeed,
        })
      } else (strafe.barrelStrafe = 0)

      return selectedBarrel
    } 


    return 0
  }

  //Optic functions

  function getOptic() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Optic'
        }
      )
    }
    return 0
  }

  function getStock() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Stock'
        }
      )
    }
    return 0
  }

  function getUnderBarrel() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Underbarrel'
        }
      )
    }
    return 0
  }

  function getPerk() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Perk'
        }
      )
    }
    return 0
  }

  function getAmmo() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Ammunition'
        }
      )
    }
    return 0
  }

  function getGrip() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Rear Grip'
        }
      )
    }
    return 0
  }

  function setClass(e) {
    if (part === 'Muzzle') {
      setMuzzle(e.target.innerText)
    }

    if (part === 'Laser') {
      setLaser(e.target.innerText)
    }
    if (part === 'Barrel') {
      setBarrel(e.target.innerText)
    }
      
  }

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


  return (
    
    <section className='create-class'>
      { weapon && 
      <div>

     
        <div>
          <h1>{weapon.name}</h1>
          
        </div>

        <div className='attachments'>
          <div className='main-div'>

            {/*Damage Profile*/}
            <div className='columns is-one-fifth'>
              
              <div className=" column profile-and-create">
                <button className='button is-black'>Stock</button>
                <select className='dropdown button'
                  onChange={setProfileStats}>
                  <option value='Profile One'>Select Damage Profile</option>
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
              

              <div className='column is-one-fifth weapon-part'>
                <button className='button is-black'>Muzzle</button>
                {
                  muzzle && <h1>{muzzle}</h1>
                }
                { attachments &&
            <select className='dropdown button'>
              <option >Select muzzle</option>
              {
                attachments &&
          getMuzzle().map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={oneMuzzle}>{attachment.attachmentName}</option>
              )
            }            
          )}
            </select> 
                }
              </div>


              {/* Laser   */}
              <div className='column is-one-fifth weapon-part'>
                <button  className='button is-black'>Laser</button>
                { attachments &&
            <select className='dropdown button'>
              <option>None</option>
              {
                attachments &&
          getLaser().map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={oneLaser}>{attachment.attachmentName}</option>
              )
            }            
          )
              }
            </select> 
                }
              </div>

              {/* Barrel*/}
              <div className='column is-one-fifth weapon-part'>
                <button className='button is-black'>Barrel</button>
                {
                  muzzle && <h1>{muzzle}</h1>
                }
                { attachments &&
            <select className='dropdown button'>
              <option >None</option>
              {
                attachments &&
          getBarrel().map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={oneBarrel}>{attachment.attachmentName}</option>
              )
            }            
          )
              }
            </select> 
                }
              </div>

              {/* Optic*/}
              <div className='column is-one-fifth weapon-part'>
                <button className='button is-black'>Optic</button>
                {
                  muzzle && <h1>{muzzle}</h1>
                }
                { attachments &&
            <select className='dropdown button'>
              <option >Select Optic</option>
              {
                attachments &&
          getOptic().map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={setClass}>{attachment.attachmentName}</option>
              )
            }            
          )
              }
            </select> 
                }
              </div>
            </div>

            <div className='weapon-image'>
             
              <img src={weapon.image}/>
              
          
            </div>

            {/* Stock*/}
            <div className='columns'>
              <div className='column is-one-fifth weapon-part'>
                <button className='button is-black'>Stock</button>
                {
                  muzzle && <h1>{muzzle}</h1>
                }
                { attachments &&
            <select className='dropdown button'>
              <option >Select Stock</option>
              {
                attachments &&
          getStock().map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={setClass}>{attachment.attachmentName}</option>
              )
            }            
          )
              }
            </select> 
                }
              </div>

              {/* Underbarrel*/}
              <div className='column is-one-fifth weapon-part'>
                <button className='button is-black'>Underbarrel</button>
                {
                  muzzle && <h1>{muzzle}</h1>
                }
                { attachments &&
            <select className='dropdown button'>
              <option >Select Underbarrel</option>
              {
                attachments &&
          getUnderBarrel().map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={setClass}>{attachment.attachmentName}</option>
              )
            }            
          )
              }
            </select> 
                }
              </div>

              {/* Perks*/}
              <div className='column is-one-fifth weapon-part'>
                <button className='button is-black'>Perk</button>
                { attachments &&
            <select className='dropdown button'>
              <option >Select Perk</option>
              {
                attachments &&
          getPerk().map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={setClass}>{attachment.attachmentName}</option>
              )
            }            
          )
              }
            </select> 
                }
              </div>

              {/* Ammo*/}
              <div className='column is-one-fifth weapon-part'>
                <button className='button is-black'>Ammo</button>
                { attachments &&
            <select className='dropdown button'>
              <option >Select Ammo</option>
              {
                attachments &&
          getAmmo().map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={setClass}>{attachment.attachmentName}</option>
              )
            }            
          )
              }
            </select> 
                }
              </div>

              {/* Grip*/}
              <div className='column is-one-fifth weapon-part'>
                <button className='button is-black'>Grip</button>
                { attachments &&
            <select className='dropdown button'>
              <option >Select Grip</option>
              {
                attachments &&
          getGrip().map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={setClass}>{attachment.attachmentName}</option>
              )
            }            
          )
              }
            </select> 
                }
              </div>
            </div>
            <div className='base-stats'>
              {
                <h3>ADS Time: {ads + adsModifier.laserAds + adsModifier.muzzleAds}</h3>
              }
            </div>
            
            <div className='stats'>
              <div className='range-boxes'>
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
                
                  <div className='range-component'>
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
                  <div className='range-component'>
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
              
                  <div className='range-component'>
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
      </div> }
    </section>


  )
}

export default CreateAClass