import React from 'react'
// import { getOneWeapon } from '../lib/api.js'
import { getAllAttachments, createAClass, getOneWeapon } from '../lib/api.js'
import { useParams } from 'react-router-dom'
import DamageProfileCard from './DamageProfileCard.js'
import MuzzleCard from './CreateAClassFunctions/MuzzleFunctions.js'
import LaserCard from './CreateAClassFunctions/LaserFunctions.js'
import BarrelCard from './CreateAClassFunctions/BarrelFunctions.js'
import OpticCard from './CreateAClassFunctions/OpticFunctions.js'
import StockCard from './CreateAClassFunctions/StockFunction.js'
import UnderBarrelCard from './CreateAClassFunctions/UnderBarrelFunctions.js'
import AmmoCard from './CreateAClassFunctions/AmmoFunctions.js'
import PerkCard from './CreateAClassFunctions/PerkFunctions.js'
import GripCard from './CreateAClassFunctions/GripFunctions.js'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


function CreateAClass() {
  const [weapon, setWeapon] = React.useState(null)
  const [attachments, setAttachments] = React.useState(null)
  // const [display, setDisplay] = React.useState(true)
  const [isError, setIsError] = React.useState(false)
  const [profile, setProfile] = React.useState('Profile One')
  const { weaponId } = useParams()
  const navigate = useNavigate()


  const [adsModifier, setAdsModifier] = React.useState({
    muzzleAds: 0,
    laserAds: 0,
    barrelAds: 0,
    opticAds: 0,
    stockAds: 0,
    underBarrelAds: 0,
    perkAds: 0,
    ammoAds: 0,
    gripAds: 0,
  })

  const sumAds = Object.values(adsModifier).reduce((a, b) => a + b, 0)

  const [rangeModifier, setRangeModifier] = React.useState({
    muzzleRange: 0,
    laserRange: 0,
    barrelRange: 0,
    opticRange: 0,
    stockRange: 0,
    underBarrelRange: 0,
    perkRange: 0,
    ammoRange: 0,
    gripRange: 0,
  })

  const sumRange = Object.values(rangeModifier).reduce( (a, b) => a + b, 0)

  const [bulletVelMod, setBulletVelMod] = React.useState({
    muzzleVel: 0,
    laserVel: 0,
    barrelVel: 0,
    opticVel: 0,
    stockVel: 0,
    underBarrelVel: 0,
    perkVel: 0,
    ammoVel: 0,
    gripVel: 0,
  })

  const sumBulletVel = Object.values(bulletVelMod).reduce( (a, b) => a + b, 0)

  const [vertRecoil, setVertRecoil] = React.useState({
    muzzleVert: 0,
    laserVert: 0,
    barrelVert: 0,
    opticVert: 0,
    stockVert: 0,
    underBarrelVert: 0,
    perkVert: 0,
    ammoVert: 0,
    gripVert: 0,
  })

  const sumVertRec = Object.values(vertRecoil).reduce( (a, b) => a + b, 0)

  const [horizRecoil, setHorizRecoil] = React.useState({
    muzzleHoriz: 0,
    laserHoriz: 0,
    barrelHoriz: 0,
    opticHoriz: 0,
    stockHoriz: 0,
    underBarrelHoriz: 0,
    perkHoriz: 0,
    ammoHoriz: 0,
    gripHoriz: 0,
  })

  const sumHorizRec = Object.values(horizRecoil).reduce( (a, b) => a + b, 0)

  const [movSpeed, setMovSpeed] = React.useState({
    muzzleMov: 0,
    laserMov: 0,
    barrelMov: 0,
    opticMov: 0,
    stockMov: 0,
    underBarrelMov: 0,
    perkMov: 0,
    ammoMov: 0,
    gripMov: 0,
  })

  const sumMovSpeed = Object.values(movSpeed).reduce( (a, b) => a + b, 0)

  const [adsMovSpeed, setAdsMovSpeed] = React.useState({
    muzzleAdsMov: 0,
    laserAdsMov: 0,
    barrelAdsMov: 0,
    opticAdsMov: 0,
    stockAdsMov: 0,
    underBarrelAdsMov: 0,
    perkAdsMov: 0,
    ammoAdsMov: 0,
    gripAdsMov: 0,
  })

  const sumAdsMovSpeed = Object.values(adsMovSpeed).reduce( (a, b) => a + b, 0)

  const [sprintSpeed, setSprintSpeed] = React.useState({
    muzzleSprintSpeed: 0,
    laserSprintSpeed: 0,
    barrelSprintSpeed: 0,
    opticSprintSpeed: 0,
    stockSprintSpeed: 0,
    underBarrelSprintSpeed: 0,
    perkSprintSpeed: 0,
    ammoSprintSpeed: 0,
    gripSprintSpeed: 0,
  })

  const sumSprintSpeed = Object.values(sprintSpeed).reduce( (a, b) => a + b, 0)

  const [magSize, setMagSize] = React.useState(0)

  const [hipFire, setHipFire] = React.useState({
    muzzleHipFire: 0,
    laserHipFire: 0,
    barrelHipFire: 0,
    opticHipFire: 0,
    stockHipFire: 0,
    underBarrelHipFire: 0,
    perkHipFire: 0,
    ammoHipFire: 0,
    gripHipFire: 0,
  })

  const sumHipFire = Object.values(hipFire).reduce( (a, b) => a + b, 0)

  const [sprintToFire, setSprintToFire] = React.useState({
    muzzleSprintToFire: 0,
    laserSprintToFire: 0,
    barrelSprintToFire: 0,
    opticSprintToFire: 0,
    stockSprintToFire: 0,
    underBarrelSprintToFire: 0,
    perkSprintToFire: 0,
    ammoSprintToFire: 0,
    gripSprintToFire: 0,
  })

  const sumSprintToFire = Object.values(sprintToFire).reduce( (a, b) => a + b, 0)

  const [tacSprint, setTacSprint] = React.useState({
    muzzleTacSprint: 0,
    laserTacSprint: 0,
    barrelTacSprint: 0,
    opticTacSprint: 0,
    stockTacSprint: 0,
    underBarrelTacSprint: 0,
    perkTacSprint: 0,
    ammoTacSprint: 0,
    gripTacSprint: 0,
  })

  const sumTacSprint = Object.values(tacSprint).reduce( (a, b) => a + b, 0)

  const [reloadTime, setReloadTime] = React.useState({
    muzzleReload: 0,
    laserReload: 0,
    barrelReload: 0,
    opticReload: 0,
    stockReload: 0,
    underBarrelReload: 0,
    perkReload: 0,
    ammoReload: 0,
    gripReload: 0,
  })

  const sumReloadTime = Object.values(reloadTime).reduce( (a, b) => a + b, 0)


  const [strafe, setStrafe] = React.useState({
    muzzleStrafe: 0,
    laserStrafe: 0,
    barrelStrafe: 0,
    opticStrafe: 0,
    stockStrafe: 0,
    underBarrelStrafe: 0,
    perkStrafe: 0,
    ammoStrafe: 0,
    gripStrafe: 0,
  })

  const sumStrafe = Object.values(strafe).reduce( (a, b) => a + b, 0)

  const [formData, setFormData] = React.useState({
    profile: 'None',
    name: 'None',
    image: 'None',
    buildImage: 'None',
    gunName: 'None',
    gameFrom: 'None',
    muzzle: 'None',
    barrel: 'None',
    laser: 'None',
    optic: 'None',
    stock: 'None',
    underBarrel: 'None',
    rearGrip: 'None',
    perk: 'None',
    weaponType: 'None',
  })
  

  const attachArray = Object.entries(formData).filter(
    keys => {
      return keys[1] !== null 
      && keys[1] !== 'None'
      && keys[1] !== 'Default' 
      && keys[0] !== 'gunName' 
      && keys[0] !== 'gameFrom' 
      && keys[0] !== 'image' 
      && keys[0] !== 'weaponType' 
      && keys[0] !== 'adsTime'
      && keys[0] !== 'buildImage'  
      && keys[0] !== 'name'  
    }
  ).map(
    key => {
      return key[0]
    }
  )

  console.log('form', formData)

  console.log(isError)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getOneWeapon(weaponId)
        const res = await getAllAttachments()
        setAttachments(res.data)
        setWeapon(response.data)
        setMagSize(response.data.magSize)
        setFormData({ ...formData, 
          image: response.data.image, 
          gunName: response.data.name,
          gameFrom: response.data.gameFrom,
          weaponType: response.data.weaponType,
          buildImage: response.data.buildImage,
        })     
      } catch (err) {
        setIsError(err)
      }
    }
    getData()
  }, [weaponId])


  console.log('attach', attachments)
  
  //Damage Profile Functions

  const setProfileStats = (e) => {
    setProfile(e.target.text)
  }

  console.log('profile', profile)

  
  const getProfileStats = () => {
    if (weapon){
      if (profile && profile.includes('Profile One')) {
        return weapon.profileOne[0]
      }
      if ( profile && profile.includes('Profile Two')) {
        return weapon.profileTwo[0]
      }
      if (profile && profile.includes('Profile Three')) {
        return weapon.profileThree[0]
      }
      if (profile && profile.includes('Profile Four')) {
        return weapon.profileFour[0]
      }
      if (profile && profile.includes('Profile Five')) {
        return weapon.profileFive[0]
      }
      if (profile && profile.includes('Profile Six')) {
        return weapon.profileSix[0]
      } else return weapon.profileOne[0]
    }
    return 0
  }

  //form submit

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await createAClass(weaponId, formData)
      console.log('data here', data)
      navigate(`/weapons/${weaponId}`)
    } catch (err) {
      console.log(err)
      setIsError(err)
    }
  }

  const handleChange = e => {
    console.log(e)
    setMagSize(weapon.magSize)
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // if (attachArray.length > 4 ) {
    //   return setDisplay(false)
    // } 
    
    // if (attachArray.length <= 4 ) {
    //   return setDisplay(true)
    // } 
  }

  console.log('length', attachArray.length)

  console.log(attachArray)

  //percent handler

  function percentConverter(percent) {
    let percentHandler = (percent / 100)
    if (percentHandler < 0 ) {
      return (100 - (percent * -1)) / 100
    } else if (percentHandler > 0) {
      return ((percentHandler / 100) * 100) + 1
    } else return percentHandler = 1
  }

  return (
    
    <section className='create-class'>
      { weapon && attachments &&
      <div>
        <form
          onSubmit={(handleSubmit)}
          className="form">

          <div className='attachments'>
            <div className='main-div'>
              <div className="create-header">
                <div>
                  <h1>{weapon.name}</h1>
                </div>
                <div className='mobile-create-weapon-div'>
                  <img className='create-weapon-image' src={weapon.image}/>
                </div>
                <div className="class-buttons">
                  <input 
                    placeholder="Name your class"
                    onChange={handleChange}
                    name="name"
                  ></input>
                  <button type="submit" className="button is-info">Create This Class</button>
                </div>
                <div className='attach-images'>
                  { attachArray.includes('muzzle') &&
                  <div className='attach-image'>
                    <motion.img className='class-attach-image' alt='muzzle' src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1643722802/cod/150_hi8otg.png"
                      initial={{ y: '10vh', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      delay={{ delay: 0.5, duration: 0.5 }}
                    />
                  </div>
                  }
                  { attachArray.includes('laser') &&
                <div className='attach-image'>
                  <motion.img className='class-attach-image' alt='laser' src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1643332191/cod/laser.png"
                    initial={{ y: '10vh', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    delay={{ delay: 0.5, duration: 0.5 }}/>
                </div>
                  }
                  { attachArray.includes('barrel') &&
                <div className='attach-image'>
                  <motion.img className='barrel-attach-image' id='barrel-image' alt='barrel' src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1643334250/cod/200_sf4d6n.png"
                    initial={{ y: '10vh', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    delay={{ delay: 0.5, duration: 0.5 }}
                  />
                </div>
                  }

                  { attachArray.includes('optic') &&
                <div className='attach-image'>
                  <motion.img  className='class-attach-image' alt='optic' src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1643723578/cod/128_qie0bw.png"
                    initial={{ y: '10vh', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    delay={{ delay: 0.5, duration: 0.5 }}/>
                </div>
                  }

                  { attachArray.includes('stock') &&
                <div className='attach-image'>
                  <motion.img className='class-attach-image' alt='stock' src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1643331829/cod/stock.png"
                    initial={{ y: '10vh', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    delay={{ delay: 0.5, duration: 0.5 }}/>
                </div>
                  }

                  { attachArray.includes('underBarrel') &&
                <div className='attach-image'>
                  <motion.img className='class-attach-image' alt='underbarrel' src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1643723313/cod/Webp.net-resizeimage_1_qkr0rq.png"
                    initial={{ y: '10vh', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    delay={{ delay: 0.5, duration: 2 }}/>
                </div>
                  }

                  { attachArray.includes('profile') &&
                <div className='attach-image'>
                  <motion.img className='class-attach-image' alt='ammo' src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1643331789/cod/ammo.png"
                    initial={{ y: '10vh', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    delay={{ delay: 0.5, duration: 2 }}/>
                </div>
                  }
                  { attachArray.includes('rearGrip') &&
                <div className='attach-image'>               
                  <motion.img className='class-attach-image' alt='reargrip' src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1643332037/cod/reargrip.png"
                    initial={{ y: '10vh', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    delay={{ delay: 0.5, duration: 2 }}/>
                </div>
                  }

                  { attachArray.includes('perk') &&
                <div className='attach-image'>
                  <motion.img className='class-attach-image' alt='perk' src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1643332319/cod/perk.png"
                    initial={{ y: '10vh', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    delay={{ delay: 0.5, duration: 2 }}/>
                </div>
                  }

                </div>
              </div>

              <div className='columns attachments-top'>
              
                {/*Muzzle*/}
                <MuzzleCard className='column is-one-fifth weapon-part' key={weapon._id} attachments={attachments} formData={formData} handleChange={handleChange} weapon={weapon} adsModifier={adsModifier} setAdsModifier={setAdsModifier} setRangeModifier={setRangeModifier} rangeModifier={rangeModifier} bulletVelMod={bulletVelMod} setBulletVelMod={setBulletVelMod} vertRecoil={vertRecoil} setVertRecoil={setVertRecoil} horizRecoil={horizRecoil} setHorizRecoil={setHorizRecoil} movSpeed={movSpeed} setMovSpeed={setMovSpeed} adsMovSpeed={adsMovSpeed} setAdsMovSpeed={setAdsMovSpeed} sprintSpeed={sprintSpeed}setSprintSpeed={setSprintSpeed} hipFire={hipFire} setHipFire={setHipFire} sprintToFire={sprintToFire} setSprintToFire={setSprintToFire} tacSprint={tacSprint} setTacSprint={setTacSprint} reloadTime={reloadTime} setReloadTime={setReloadTime} strafe={strafe} setStrafe={setStrafe} attachArray={attachArray}
                />

                {/* Laser   */}

                <LaserCard className='column is-one-fifth weapon-part' key={weapon.name} attachments={attachments} formData={formData} handleChange={handleChange} weapon={weapon} adsModifier={adsModifier} setAdsModifier={setAdsModifier} setRangeModifier={setRangeModifier} rangeModifier={rangeModifier} bulletVelMod={bulletVelMod} setBulletVelMod={setBulletVelMod} vertRecoil={vertRecoil} setVertRecoil={setVertRecoil} horizRecoil={horizRecoil} setHorizRecoil={setHorizRecoil} movSpeed={movSpeed} setMovSpeed={setMovSpeed} adsMovSpeed={adsMovSpeed} setAdsMovSpeed={setAdsMovSpeed} sprintSpeed={sprintSpeed}setSprintSpeed={setSprintSpeed} hipFire={hipFire} setHipFire={setHipFire} sprintToFire={sprintToFire} setSprintToFire={setSprintToFire} tacSprint={tacSprint} setTacSprint={setTacSprint} reloadTime={reloadTime} setReloadTime={setReloadTime} strafe={strafe} setStrafe={setStrafe} attachArray={attachArray}/>

                {/* Barrel*/}
                <BarrelCard className='column is-one-fifth weapon-part' key={weapon.image} attachments={attachments} formData={formData} handleChange={handleChange} weapon={weapon} adsModifier={adsModifier} setAdsModifier={setAdsModifier} setRangeModifier={setRangeModifier} rangeModifier={rangeModifier} bulletVelMod={bulletVelMod} setBulletVelMod={setBulletVelMod} vertRecoil={vertRecoil} setVertRecoil={setVertRecoil} horizRecoil={horizRecoil} setHorizRecoil={setHorizRecoil} movSpeed={movSpeed} setMovSpeed={setMovSpeed} adsMovSpeed={adsMovSpeed} setAdsMovSpeed={setAdsMovSpeed} sprintSpeed={sprintSpeed}setSprintSpeed={setSprintSpeed} hipFire={hipFire} setHipFire={setHipFire} sprintToFire={sprintToFire} setSprintToFire={setSprintToFire} tacSprint={tacSprint} setTacSprint={setTacSprint} reloadTime={reloadTime} setReloadTime={setReloadTime} strafe={strafe} setStrafe={setStrafe} attachArray={attachArray}/>

                {/* Optic*/}
                <OpticCard className='column is-one-fifth weapon-part' key={weapon.adsTime} attachments={attachments} formData={formData} handleChange={handleChange} weapon={weapon} adsModifier={adsModifier} setAdsModifier={setAdsModifier} setRangeModifier={setRangeModifier} rangeModifier={rangeModifier} bulletVelMod={bulletVelMod} setBulletVelMod={setBulletVelMod} vertRecoil={vertRecoil} setVertRecoil={setVertRecoil} horizRecoil={horizRecoil} setHorizRecoil={setHorizRecoil} movSpeed={movSpeed} setMovSpeed={setMovSpeed} adsMovSpeed={adsMovSpeed} setAdsMovSpeed={setAdsMovSpeed} sprintSpeed={sprintSpeed}setSprintSpeed={setSprintSpeed} hipFire={hipFire} setHipFire={setHipFire} sprintToFire={sprintToFire} setSprintToFire={setSprintToFire} tacSprint={tacSprint} setTacSprint={setTacSprint} reloadTime={reloadTime} setReloadTime={setReloadTime} strafe={strafe} setStrafe={setStrafe} attachArray={attachArray}/>

              </div>
            </div>
  
            <div className='create-weapon-div'>
              <img className='create-weapon-image' src={weapon.image}/>
            </div>
            <div>
              
            </div>

            <div className='columns attachments-bottom'>
              {/* Stock*/}
              <StockCard className='column is-one-fifth weapon-part' key={weapon.magSize} attachments={attachments} formData={formData} handleChange={handleChange} weapon={weapon} adsModifier={adsModifier} setAdsModifier={setAdsModifier} setRangeModifier={setRangeModifier} rangeModifier={rangeModifier} bulletVelMod={bulletVelMod} setBulletVelMod={setBulletVelMod} vertRecoil={vertRecoil} setVertRecoil={setVertRecoil} horizRecoil={horizRecoil} setHorizRecoil={setHorizRecoil} movSpeed={movSpeed} setMovSpeed={setMovSpeed} adsMovSpeed={adsMovSpeed} setAdsMovSpeed={setAdsMovSpeed} sprintSpeed={sprintSpeed}setSprintSpeed={setSprintSpeed} hipFire={hipFire} setHipFire={setHipFire} sprintToFire={sprintToFire} setSprintToFire={setSprintToFire} tacSprint={tacSprint} setTacSprint={setTacSprint} reloadTime={reloadTime} setReloadTime={setReloadTime} strafe={strafe} setStrafe={setStrafe} attachArray={attachArray}/>

              {/* Underbarrel*/}
              <UnderBarrelCard className='column is-one-fifth weapon-part' key={weapon.strafeSpeed} attachments={attachments} formData={formData} handleChange={handleChange} weapon={weapon} adsModifier={adsModifier} setAdsModifier={setAdsModifier} setRangeModifier={setRangeModifier} rangeModifier={rangeModifier} bulletVelMod={bulletVelMod} setBulletVelMod={setBulletVelMod} vertRecoil={vertRecoil} setVertRecoil={setVertRecoil} horizRecoil={horizRecoil} setHorizRecoil={setHorizRecoil} movSpeed={movSpeed} setMovSpeed={setMovSpeed} adsMovSpeed={adsMovSpeed} setAdsMovSpeed={setAdsMovSpeed} sprintSpeed={sprintSpeed}setSprintSpeed={setSprintSpeed} hipFire={hipFire} setHipFire={setHipFire} sprintToFire={sprintToFire} setSprintToFire={setSprintToFire} tacSprint={tacSprint} setTacSprint={setTacSprint} reloadTime={reloadTime} setReloadTime={setReloadTime} strafe={strafe} setStrafe={setStrafe} attachArray={attachArray}/>

              {/*Ammo*/}

              <AmmoCard className='column is-one-fifth weapon-part' key={weapon.reloadTime} attachments={attachments} formData={formData} handleChange={handleChange} weapon={weapon} adsModifier={adsModifier} setAdsModifier={setAdsModifier} setRangeModifier={setRangeModifier} rangeModifier={rangeModifier} bulletVelMod={bulletVelMod} setBulletVelMod={setBulletVelMod} vertRecoil={vertRecoil} setVertRecoil={setVertRecoil} horizRecoil={horizRecoil} setHorizRecoil={setHorizRecoil} movSpeed={movSpeed} setMovSpeed={setMovSpeed} adsMovSpeed={adsMovSpeed} setAdsMovSpeed={setAdsMovSpeed} sprintSpeed={sprintSpeed}setSprintSpeed={setSprintSpeed} hipFire={hipFire} setHipFire={setHipFire} sprintToFire={sprintToFire} setSprintToFire={setSprintToFire} tacSprint={tacSprint} setTacSprint={setTacSprint} reloadTime={reloadTime} setReloadTime={setReloadTime} strafe={strafe} setStrafe={setStrafe} setProfileStats={setProfileStats} setMagSize={setMagSize} attachArray={attachArray}/>

              {/* Perks*/}

              <PerkCard className='column is-one-fifth weapon-part' key={weapon.sprintSpeed} attachments={attachments} formData={formData} handleChange={handleChange} weapon={weapon} adsModifier={adsModifier} setAdsModifier={setAdsModifier} setRangeModifier={setRangeModifier} rangeModifier={rangeModifier} bulletVelMod={bulletVelMod} setBulletVelMod={setBulletVelMod} vertRecoil={vertRecoil} setVertRecoil={setVertRecoil} horizRecoil={horizRecoil} setHorizRecoil={setHorizRecoil} movSpeed={movSpeed} setMovSpeed={setMovSpeed} adsMovSpeed={adsMovSpeed} setAdsMovSpeed={setAdsMovSpeed} sprintSpeed={sprintSpeed}setSprintSpeed={setSprintSpeed} hipFire={hipFire} setHipFire={setHipFire} sprintToFire={sprintToFire} setSprintToFire={setSprintToFire} tacSprint={tacSprint} setTacSprint={setTacSprint} reloadTime={reloadTime} setReloadTime={setReloadTime} strafe={strafe} setStrafe={setStrafe} attachArray={attachArray}/>


              {/* Grip*/}
              <GripCard  className='column is-one-fifth weapon-part' key={weapon.hipFireArea} attachments={attachments} formData={formData} handleChange={handleChange} weapon={weapon} adsModifier={adsModifier} setAdsModifier={setAdsModifier} setRangeModifier={setRangeModifier} rangeModifier={rangeModifier} bulletVelMod={bulletVelMod} setBulletVelMod={setBulletVelMod} vertRecoil={vertRecoil} setVertRecoil={setVertRecoil} horizRecoil={horizRecoil} setHorizRecoil={setHorizRecoil} movSpeed={movSpeed} setMovSpeed={setMovSpeed} adsMovSpeed={adsMovSpeed} setAdsMovSpeed={setAdsMovSpeed} sprintSpeed={sprintSpeed}setSprintSpeed={setSprintSpeed} hipFire={hipFire} setHipFire={setHipFire} sprintToFire={sprintToFire} setSprintToFire={setSprintToFire} tacSprint={tacSprint} setTacSprint={setTacSprint} reloadTime={reloadTime} setReloadTime={setReloadTime} strafe={strafe} setStrafe={setStrafe} attachArray={attachArray}/>

            </div>
            <div className='create-stats-div'>
              <div className='base-stats'>
                {
                  // setFormData({ ...formData, [e.target.name]: e.target.value }
                  <div className='variable-stats'>
                    <h1 className='create-class-stats'>Gunfight</h1>
                    <h3>ADS Time: <span>{weapon.adsTime + sumAds }</span></h3>
                    <h3>Reload Time: {weapon.reloadTime + sumReloadTime}</h3>
                    <h3>Bullet Velocity: {(weapon.bulletVelocity * percentConverter(sumBulletVel)).toFixed(2)}</h3>
                    <h3>Hipfire Area: {(weapon.hipfireArea * percentConverter(sumHipFire)).toFixed(2)}</h3>
                    <h3>Magazine Size: {magSize}</h3>
                    <h3>Open Bolt Delay: {weapon.openBoltDelay}</h3>
                  </div>
                }

                <div className='variable-stats'>
                  <h1 className='create-class-stats' >Movement</h1>
                  <h3>Movement Speed: {(weapon.movementSpeed * percentConverter(sumMovSpeed)).toFixed(2)}</h3>
                  <h3>Strafe Speed: {(weapon.strafeSpeed * percentConverter(sumStrafe)).toFixed(2)}</h3>
                  <h3>Sprint Speed: {(weapon.sprintSpeed * percentConverter(sumSprintSpeed)).toFixed(2)}</h3>
                  <h3>Sprint To Fire: {weapon.sprintToFire + sumSprintToFire}</h3>
                  <h3>Tactical Sprint To Fire: {weapon.tacSprintToFire + sumTacSprint}</h3>
                  <h3>ADS Movement: {(weapon.adsMovementSpeed * percentConverter(sumAdsMovSpeed)).toFixed(2)}</h3>
                </div>

                <div className='variable-stats'>
                  <h1 className='create-class-stats'>Recoil</h1>
                  <h3>Vertical Recoil as %: { sumVertRec}</h3>
                  <h3>Horizontal Recoil as %: {sumHorizRec}</h3>
                </div>
              </div>
            
              <div className='create-class-range-stats'>
                <div className='range-header'>
                  <h1 className='header'>Ranges</h1>
                </div>
                <div className='range-boxes'>
                  {
                    weapon && getProfileStats().rangeOne &&
                
                  <div className='range-component'>
                    {
                      getProfileStats().rangeOne.map(
                        profile => (
                          <DamageProfileCard key={profile._id} profile={profile} rangeMod={sumRange}/>
                        )   
                      )
                    }
                  </div>
                
                  }
                  {
                    weapon && getProfileStats().rangeTwo &&
                
                  <div className='range-component'>
                    {
                      getProfileStats().rangeTwo.map(
                        profile => (
                          <DamageProfileCard key={profile.name} profile={profile} rangeMod={sumRange}/>
                        )   
                      )
                    }
                  </div>
                  }

                  {
                    weapon && getProfileStats().rangeThree &&
                  <div className='range-component'>
                    {
                      getProfileStats().rangeThree.map(
                        profile => (
                          <DamageProfileCard key={profile.id} profile={profile} rangeMod={sumRange}/>
                        )   
                      )
                    }
                  </div>
              
                  }

                  {
                    weapon && getProfileStats().rangeFour &&
              
                  <div className='range-component'>
                    {
                      getProfileStats().rangeFour.map(
                        profile => (
                          <DamageProfileCard key={profile._id_} profile={profile} rangeMod={sumRange}/>
                        )   
                      )
                    }
                  </div>
                  }  
                </div>            
              </div>
            </div>
          </div>
        </form>
      </div>}
    </section>
  )
}

export default CreateAClass