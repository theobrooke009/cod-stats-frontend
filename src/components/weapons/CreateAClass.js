import React from 'react'
// import { getOneWeapon } from '../lib/api.js'
import { getAllAttachments, createAClass, getOneWeapon } from '../lib/api.js'
import { useParams } from 'react-router-dom'
import DamageProfileCard from './DamageProfileCard.js'
import { useNavigate } from 'react-router-dom'



function CreateAClass() {
  const [weapon, setWeapon] = React.useState(null)
  const [attachments, setAttachments] = React.useState(null)

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

  const [magSize, setMagSize] = React.useState({
    muzzleMag: 0,
    laserMag: 0,
    barrelMag: 0,
    opticMag: 0,
    stockMag: 0,
    underBarrelMag: 0,
    perkMag: 0,
    ammoMag: 0,
    gripMag: 0,
  })

  const sumMagSize = Object.values(magSize).reduce( (a, b) => a + b, 0)

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

  const [isError, setIsError] = React.useState(false)
  const [profile, setProfile] = React.useState('Profile One')
  const { weaponId } = useParams()
  const [formData, setFormData] = React.useState({
    profile: '',
    name: '',
    image: '',
    muzzle: '',
    barrel: '',
    laser: '',
    optic: '',
    stock: '',
    underBarrel: '',
    ammunition: '',
    rearGrip: '',
    perk: '',
  })

  console.log(isError, setSprintSpeed, setBulletVelMod, setMovSpeed, setRangeModifier, setVertRecoil, setHorizRecoil, setAdsModifier, sumRange, sumBulletVel, sumVertRec, sumHorizRec, sumMovSpeed, setProfile, sumAdsMovSpeed, sumSprintSpeed, sumMagSize, sumHipFire, sumSprintToFire, sumTacSprint, sumReloadTime, sumStrafe)

  const navigate = useNavigate()


  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getOneWeapon(weaponId)
        setWeapon(response.data)        
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
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Muzzle' && attachment.attachmentName !== 'None'
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
      if (selectedMuzzle[0].adsModifier){
        setAdsModifier(
          { ...adsModifier, muzzleAds: selectedMuzzle[0].adsModifier }
        )
      } else (adsModifier.muzzleAds = 0)

      if (selectedMuzzle[0].rangeModifier){
        setRangeModifier({
          ...rangeModifier, muzzleRange: selectedMuzzle[0].rangeModifier,
        })
      } else (rangeModifier.muzzleRange = 0)

      if (selectedMuzzle[0].bulletVelocityModifier) {
        setBulletVelMod({
          ...bulletVelMod, muzzleVel: selectedMuzzle[0].bulletVelocityModifier,
        })
      } else (bulletVelMod.muzzleVel = 0)

      if (selectedMuzzle[0].verticalRecoil) {
        setVertRecoil({
          ...vertRecoil, muzzleVert: selectedMuzzle[0].verticalRecoil,
        })
      } else (vertRecoil.muzzleVert = 0)

      if (selectedMuzzle[0].horizontalRecoil) {
        setHorizRecoil({
          ...horizRecoil, muzzleHoriz: selectedMuzzle[0].horizontalRecoil,
        })
      } else (horizRecoil.muzzleHoriz = 0)

      if (selectedMuzzle[0].movementSpeed) {
        setMovSpeed({
          ...movSpeed, muzzleMov: selectedMuzzle[0].movementSpeed,
        })
      } else (movSpeed.muzzleMov = 0)

      if (selectedMuzzle[0].adsMovementSpeed) {
        setAdsMovSpeed({
          ...adsMovSpeed, muzzleAdsMov: selectedMuzzle[0].adsMovementSpeed,
        })
      } else (adsMovSpeed.muzzleAdsMov = 0 )

      if (selectedMuzzle[0].sprintSpeed) {
        setSprintSpeed({
          ...sprintSpeed, muzzleSprintSpeed: selectedMuzzle[0].sprintSpeed,
        })
      } else (sprintSpeed.muzzleSprintSpeed = 0)
      
      if (selectedMuzzle[0].magSize) {
        setMagSize({
          ...magSize, muzzleMag: selectedMuzzle[0].magSize,
        })
      } else (magSize.muzzleMag = 0)

      if (selectedMuzzle[0].hipfireArea) {
        setHipFire({
          ...hipFire, muzzleHipFire: selectedMuzzle[0].hipfireArea,
        })
      } else (hipFire.muzzleHipFire = 0)

      if (selectedMuzzle[0].sprintToFire) {
        setSprintToFire({
          ...sprintToFire, muzzleSprintToFire: selectedMuzzle[0].sprintToFire,
        })
      } else (sprintToFire.muzzleSprintToFire = 0)

      if (selectedMuzzle[0].tacSprintToFire) {
        setTacSprint({
          ...tacSprint, muzzleTacSprint: selectedMuzzle[0].tacSprintToFire,
        })
      } else (tacSprint.muzzleTacSprint = 0)

      if (selectedMuzzle[0].reloadTime) {
        setReloadTime({
          ...reloadTime, muzzleReload: selectedMuzzle[0].reloadTime,
        })
      } else (reloadTime.muzzleReload = 0)

      if (selectedMuzzle[0].strafeSpeed) {
        setStrafe({
          ...strafe, muzzleStrafe: selectedMuzzle[0].strafeSpeed,
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
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Laser' && attachment.attachmentName !== 'None'
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

      if (selectedLaser[0].adsModifier){
        setAdsModifier(
          { ...adsModifier, laserAds: selectedLaser[0].adsModifier }
        )
      } else (adsModifier.laserAds = 0)

      if (selectedLaser[0].rangeModifier){
        setRangeModifier({
          ...rangeModifier, laserRange: selectedLaser[0].rangeModifier,
        })
      } else (rangeModifier.laserRange = 0)

      if (selectedLaser[0].bulletVelocityModifier) {
        setBulletVelMod({
          ...bulletVelMod, laserVel: selectedLaser[0].bulletVelocityModifier,
        })
      } else (bulletVelMod.laserVel = 0)

      if (selectedLaser[0].verticalRecoil) {
        setVertRecoil({
          ...vertRecoil, laserVert: selectedLaser[0].verticalRecoil,
        })
      } else (vertRecoil.laserVert = 0)

      if (selectedLaser[0].horizontalRecoil) {
        setHorizRecoil({
          ...horizRecoil, laserHoriz: selectedLaser[0].horizontalRecoil,
        })
      } else (horizRecoil.laserHoriz = 0)

      if (selectedLaser[0].movementSpeed) {
        setMovSpeed({
          ...movSpeed, laserMov: selectedLaser[0].movementSpeed,
        })
      } else (movSpeed.laserMov = 0)

      if (selectedLaser[0].adsMovementSpeed) {
        setAdsMovSpeed({
          ...adsMovSpeed, laserAdsMov: selectedLaser[0].adsMovementSpeed,
        })
      } else (adsMovSpeed.laserAdsMov = 0 )

      if (selectedLaser[0].sprintSpeed) {
        setSprintSpeed({
          ...sprintSpeed, laserSprintSpeed: selectedLaser[0].sprintSpeed,
        })
      } else (sprintSpeed.laserSprintSpeed = 0)
      
      if (selectedLaser[0].magSize) {
        setMagSize({
          ...magSize, laserMag: selectedLaser[0].magSize,
        })
      } else (magSize.laserMag = 0)

      if (selectedLaser[0].hipfireArea) {
        setHipFire({
          ...hipFire, laserHipFire: selectedLaser[0].hipfireArea,
        })
      } else (hipFire.laserHipFire = 0)

      if (selectedLaser[0].sprintToFire) {
        setSprintToFire({
          ...sprintToFire, laserSprintToFire: selectedLaser[0].sprintToFire,
        })
      } else (sprintToFire.laserSprintToFire = 0)

      if (selectedLaser[0].tacSprintToFire) {
        setTacSprint({
          ...tacSprint, laserTacSprint: selectedLaser[0].tacSprintToFire,
        })
      } else (tacSprint.laserTacSprint = 0)

      if (selectedLaser[0].reloadTime) {
        setReloadTime({
          ...reloadTime, laserReload: selectedLaser[0].reloadTime,
        })
      } else (reloadTime.laserReload = 0)

      if (selectedLaser[0].strafeSpeed) {
        setStrafe({
          ...strafe, laserStrafe: selectedLaser[0].strafeSpeed,
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
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Barrel' && attachment.attachmentName !== 'None'
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

      if (selectedBarrel[0].adsModifier){
        setAdsModifier(
          { ...adsModifier, barrelAds: selectedBarrel[0].adsModifier }
        )
      } else (adsModifier.barrelAds = 0)

      if (selectedBarrel[0].rangeModifier){
        setRangeModifier({
          ...rangeModifier, barrelRange: selectedBarrel[0].rangeModifier,
        })
      } else (rangeModifier.barrelRange = 0)

      if (selectedBarrel[0].bulletVelocityModifier) {
        setBulletVelMod({
          ...bulletVelMod, barrelVel: selectedBarrel[0].bulletVelocityModifier,
        })
      } else (bulletVelMod.barrelVel = 0)

      if (selectedBarrel[0].verticalRecoil) {
        setVertRecoil({
          ...vertRecoil, barrelVert: selectedBarrel[0].verticalRecoil,
        })
      } else (vertRecoil.barrelVert = 0)

      if (selectedBarrel[0].horizontalRecoil) {
        setHorizRecoil({
          ...horizRecoil, barrelHoriz: selectedBarrel[0].horizontalRecoil,
        })
      } else (horizRecoil.barrelHoriz = 0)

      if (selectedBarrel[0].movementSpeed) {
        setMovSpeed({
          ...movSpeed, barrelMov: selectedBarrel[0].movementSpeed,
        })
      } else (movSpeed.barrelMov = 0)

      if (selectedBarrel[0].adsMovementSpeed) {
        setAdsMovSpeed({
          ...adsMovSpeed, barrelAdsMov: selectedBarrel[0].adsMovementSpeed,
        })
      } else (adsMovSpeed.barrelAdsMov = 0 )

      if (selectedBarrel[0].sprintSpeed) {
        setSprintSpeed({
          ...sprintSpeed, barrelSprintSpeed: selectedBarrel[0].sprintSpeed,
        })
      } else (sprintSpeed.barrelSprintSpeed = 0)
      
      if (selectedBarrel[0].magSize) {
        setMagSize({
          ...magSize, barrelMag: selectedBarrel[0].magSize,
        })
      } else (magSize.barrelMag = 0)

      if (selectedBarrel[0].hipfireArea) {
        setHipFire({
          ...hipFire, barrelHipFire: selectedBarrel[0].hipfireArea,
        })
      } else (hipFire.barrelHipFire = 0)

      if (selectedBarrel[0].sprintToFire) {
        setSprintToFire({
          ...sprintToFire, barrelSprintToFire: selectedBarrel[0].sprintToFire,
        })
      } else (sprintToFire.barrelSprintToFire = 0)

      if (selectedBarrel[0].tacSprintToFire) {
        setTacSprint({
          ...tacSprint, barrelTacSprint: selectedBarrel[0].tacSprintToFire,
        })
      } else (tacSprint.barrelTacSprint = 0)

      if (selectedBarrel[0].reloadTime) {
        setReloadTime({
          ...reloadTime, barrelReload: selectedBarrel[0].reloadTime,
        })
      } else (reloadTime.barrelReload = 0)

      if (selectedBarrel[0].strafeSpeed) {
        setStrafe({
          ...strafe, barrelStrafe: selectedBarrel[0].strafeSpeed,
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
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Optic' && attachment.attachmentName !== 'None'
        }
      )
    }
    return 0
  }

  function oneOptic(e) {
    if (attachments && weapon) {
      const selectedOptic = attachments.filter(
        attachment => {
          return  attachment.weapons.includes(weapon.name) && attachment.attachmentName.includes(e.target.innerHTML)
          
        }
      )

      if (selectedOptic[0].adsModifier){
        setAdsModifier(
          { ...adsModifier, opticAds: selectedOptic[0].adsModifier }
        )
      } else (adsModifier.opticAds = 0)

      if (selectedOptic[0].rangeModifier){
        setRangeModifier({
          ...rangeModifier, opticRange: selectedOptic[0].rangeModifier,
        })
      } else (rangeModifier.opticRange = 0)

      if (selectedOptic[0].bulletVelocityModifier) {
        setBulletVelMod({
          ...bulletVelMod, opticVel: selectedOptic[0].bulletVelocityModifier,
        })
      } else (bulletVelMod.opticVel = 0)

      if (selectedOptic[0].verticalRecoil) {
        setVertRecoil({
          ...vertRecoil, opticVert: selectedOptic[0].verticalRecoil,
        })
      } else (vertRecoil.opticVert = 0)

      if (selectedOptic[0].horizontalRecoil) {
        setHorizRecoil({
          ...horizRecoil, opticHoriz: selectedOptic[0].horizontalRecoil,
        })
      } else (horizRecoil.opticHoriz = 0)

      if (selectedOptic[0].movementSpeed) {
        setMovSpeed({
          ...movSpeed, opticMov: selectedOptic[0].movementSpeed,
        })
      } else (movSpeed.opticMov = 0)

      if (selectedOptic[0].adsMovementSpeed) {
        setAdsMovSpeed({
          ...adsMovSpeed, opticAdsMov: selectedOptic[0].adsMovementSpeed,
        })
      } else (adsMovSpeed.opticAdsMov = 0 )

      if (selectedOptic[0].sprintSpeed) {
        setSprintSpeed({
          ...sprintSpeed, opticSprintSpeed: selectedOptic[0].sprintSpeed,
        })
      } else (sprintSpeed.opticSprintSpeed = 0)
      
      if (selectedOptic[0].magSize) {
        setMagSize({
          ...magSize, opticMag: selectedOptic[0].magSize,
        })
      } else (magSize.opticMag = 0)

      if (selectedOptic[0].hipfireArea) {
        setHipFire({
          ...hipFire, opticHipFire: selectedOptic[0].hipfireArea,
        })
      } else (hipFire.opticHipFire = 0)

      if (selectedOptic[0].sprintToFire) {
        setSprintToFire({
          ...sprintToFire, opticSprintToFire: selectedOptic[0].sprintToFire,
        })
      } else (sprintToFire.opticSprintToFire = 0)

      if (selectedOptic[0].tacSprintToFire) {
        setTacSprint({
          ...tacSprint, opticTacSprint: selectedOptic[0].tacSprintToFire,
        })
      } else (tacSprint.opticTacSprint = 0)

      if (selectedOptic[0].reloadTime) {
        setReloadTime({
          ...reloadTime, opticReload: selectedOptic[0].reloadTime,
        })
      } else (reloadTime.opticReload = 0)

      if (selectedOptic[0].strafeSpeed) {
        setStrafe({
          ...strafe, opticStrafe: selectedOptic[0].strafeSpeed,
        })
      } else (strafe.opticStrafe = 0)

      return selectedOptic
    } 


    return 0
  }

  //Stock functions

  function getStock() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Stock' && attachment.attachmentName !== 'None'
        }
      )
    }
    return 0
  }

  function oneStock(e) {
    if (attachments && weapon) {
      const selectedStock = attachments.filter(
        attachment => {
          return  attachment.weapons.includes(weapon.name) && attachment.attachmentName.includes(e.target.innerHTML)
          
        }
      )

      if (selectedStock[0].adsModifier){
        setAdsModifier(
          { ...adsModifier, stockAds: selectedStock[0].adsModifier }
        )
      } else (adsModifier.stockAds = 0)

      if (selectedStock[0].rangeModifier){
        setRangeModifier({
          ...rangeModifier, stockRange: selectedStock[0].rangeModifier,
        })
      } else (rangeModifier.stockRange = 0)

      if (selectedStock[0].bulletVelocityModifier) {
        setBulletVelMod({
          ...bulletVelMod, stockVel: selectedStock[0].bulletVelocityModifier,
        })
      } else (bulletVelMod.stockVel = 0)

      if (selectedStock[0].verticalRecoil) {
        setVertRecoil({
          ...vertRecoil, stockVert: selectedStock[0].verticalRecoil,
        })
      } else (vertRecoil.stockVert = 0)

      if (selectedStock[0].horizontalRecoil) {
        setHorizRecoil({
          ...horizRecoil, stockHoriz: selectedStock[0].horizontalRecoil,
        })
      } else (horizRecoil.stockHoriz = 0)

      if (selectedStock[0].movementSpeed) {
        setMovSpeed({
          ...movSpeed, stockMov: selectedStock[0].movementSpeed,
        })
      } else (movSpeed.stockMov = 0)

      if (selectedStock[0].adsMovementSpeed) {
        setAdsMovSpeed({
          ...adsMovSpeed, stockAdsMov: selectedStock[0].adsMovementSpeed,
        })
      } else (adsMovSpeed.stockAdsMov = 0 )

      if (selectedStock[0].sprintSpeed) {
        setSprintSpeed({
          ...sprintSpeed, stockSprintSpeed: selectedStock[0].sprintSpeed,
        })
      } else (sprintSpeed.stockSprintSpeed = 0)
      
      if (selectedStock[0].magSize) {
        setMagSize({
          ...magSize, stockMag: selectedStock[0].magSize,
        })
      } else (magSize.stockMag = 0)

      if (selectedStock[0].hipfireArea) {
        setHipFire({
          ...hipFire, stockHipFire: selectedStock[0].hipfireArea,
        })
      } else (hipFire.stockHipFire = 0)

      if (selectedStock[0].sprintToFire) {
        setSprintToFire({
          ...sprintToFire, stockSprintToFire: selectedStock[0].sprintToFire,
        })
      } else (sprintToFire.stockSprintToFire = 0)

      if (selectedStock[0].tacSprintToFire) {
        setTacSprint({
          ...tacSprint, stockTacSprint: selectedStock[0].tacSprintToFire,
        })
      } else (tacSprint.stockTacSprint = 0)

      if (selectedStock[0].reloadTime) {
        setReloadTime({
          ...reloadTime, stockReload: selectedStock[0].reloadTime,
        })
      } else (reloadTime.stockReload = 0)

      if (selectedStock[0].strafeSpeed) {
        setStrafe({
          ...strafe, stockStrafe: selectedStock[0].strafeSpeed,
        })
      } else (strafe.stockStrafe = 0)

      return selectedStock
    } 


    return 0
  }

  //Underbarrel functions

  function getUnderBarrel() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Underbarrel' && attachment.attachmentName !== 'None'
        }
      )
    }
    return 0
  }

  function oneUnderBarrel(e) {
    if (attachments && weapon) {
      const selectedUnderBarrel = attachments.filter(
        attachment => {
          return  attachment.weapons.includes(weapon.name) && attachment.attachmentName.includes(e.target.innerHTML)
          
        }
      )

     
      if (selectedUnderBarrel[0].adsModifier){
        setAdsModifier(
          { ...adsModifier, underBarrelAds: selectedUnderBarrel[0].adsModifier }
        )
      } else (adsModifier.underBarrelAds = 0)

      if (selectedUnderBarrel[0].rangeModifier){
        setRangeModifier({
          ...rangeModifier, underBarrelRange: selectedUnderBarrel[0].rangeModifier,
        })
      } else (rangeModifier.underBarrelRange = 0)

      if (selectedUnderBarrel[0].bulletVelocityModifier) {
        setBulletVelMod({
          ...bulletVelMod, underBarrelVel: selectedUnderBarrel[0].bulletVelocityModifier,
        })
      } else (bulletVelMod.underBarrelVel = 0)

      if (selectedUnderBarrel[0].verticalRecoil) {
        setVertRecoil({
          ...vertRecoil, underBarrelVert: selectedUnderBarrel[0].verticalRecoil,
        })
      } else (vertRecoil.underBarrelVert = 0)

      if (selectedUnderBarrel[0].horizontalRecoil) {
        setHorizRecoil({
          ...horizRecoil, underBarrelHoriz: selectedUnderBarrel[0].horizontalRecoil,
        })
      } else (horizRecoil.underBarrelHoriz = 0)

      if (selectedUnderBarrel[0].movementSpeed) {
        setMovSpeed({
          ...movSpeed, underBarrelMov: selectedUnderBarrel[0].movementSpeed,
        })
      } else (movSpeed.underBarrelMov = 0)

      if (selectedUnderBarrel[0].adsMovementSpeed) {
        setAdsMovSpeed({
          ...adsMovSpeed, underBarrelAdsMov: selectedUnderBarrel[0].adsMovementSpeed,
        })
      } else (adsMovSpeed.underBarrelAdsMov = 0 )

      if (selectedUnderBarrel[0].sprintSpeed) {
        setSprintSpeed({
          ...sprintSpeed, UnderBarrelSprintSpeed: selectedUnderBarrel[0].sprintSpeed,
        })
      } else (sprintSpeed.underBarrelSprintSpeed = 0)
      
      if (selectedUnderBarrel[0].magSize) {
        setMagSize({
          ...magSize, underBarrelMag: selectedUnderBarrel[0].magSize,
        })
      } else (magSize.underBarrelMag = 0)

      if (selectedUnderBarrel[0].hipfireArea) {
        setHipFire({
          ...hipFire, underBarrelHipFire: selectedUnderBarrel[0].hipfireArea,
        })
      } else (hipFire.underBarrelHipFire = 0)

      if (selectedUnderBarrel[0].sprintToFire) {
        setSprintToFire({
          ...sprintToFire, underBarrelSprintToFire: selectedUnderBarrel[0].sprintToFire,
        })
      } else (sprintToFire.underBarrelSprintToFire = 0)

      if (selectedUnderBarrel[0].tacSprintToFire) {
        setTacSprint({
          ...tacSprint, underBarrelTacSprint: selectedUnderBarrel[0].tacSprintToFire,
        })
      } else (tacSprint.underBarrelTacSprint = 0)

      if (selectedUnderBarrel[0].reloadTime) {
        setReloadTime({
          ...reloadTime, underBarrelReload: selectedUnderBarrel[0].reloadTime,
        })
      } else (reloadTime.underBarrelReload = 0)

      if (selectedUnderBarrel[0].strafeSpeed) {
        setStrafe({
          ...strafe, underBarrelStrafe: selectedUnderBarrel[0].strafeSpeed,
        })
      } else (strafe.underBarrelStrafe = 0)

      return selectedUnderBarrel
    } 


    return 0
  }

  //perk functions

  function getPerk() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Perk' && attachment.attachmentName !== 'None'
        }
      )
    }
    return 0
  }

  function onePerk(e) {
    if (attachments && weapon) {
      const selectedPerk = attachments.filter(
        attachment => {
          return  attachment.weapons.includes(weapon.name) && attachment.attachmentName.includes(e.target.innerHTML)
          
        }
      )

      if (selectedPerk[0].adsModifier){
        setAdsModifier(
          { ...adsModifier, perkAds: selectedPerk[0].adsModifier }
        )
      } else (adsModifier.perkAds = 0)

      if (selectedPerk[0].rangeModifier){
        setRangeModifier({
          ...rangeModifier, perkRange: selectedPerk[0].rangeModifier,
        })
      } else (rangeModifier.perkRange = 0)

      if (selectedPerk[0].bulletVelocityModifier) {
        setBulletVelMod({
          ...bulletVelMod, perkVel: selectedPerk[0].bulletVelocityModifier,
        })
      } else (bulletVelMod.perkVel = 0)

      if (selectedPerk[0].verticalRecoil) {
        setVertRecoil({
          ...vertRecoil, perkVert: selectedPerk[0].verticalRecoil,
        })
      } else (vertRecoil.perkVert = 0)

      if (selectedPerk[0].horizontalRecoil) {
        setHorizRecoil({
          ...horizRecoil, perkHoriz: selectedPerk[0].horizontalRecoil,
        })
      } else (horizRecoil.perkHoriz = 0)

      if (selectedPerk[0].movementSpeed) {
        setMovSpeed({
          ...movSpeed, perkMov: selectedPerk[0].movementSpeed,
        })
      } else (movSpeed.perkMov = 0)

      if (selectedPerk[0].adsMovementSpeed) {
        setAdsMovSpeed({
          ...adsMovSpeed, perkAdsMov: selectedPerk[0].adsMovementSpeed,
        })
      } else (adsMovSpeed.perkAdsMov = 0 )

      if (selectedPerk[0].sprintSpeed) {
        setSprintSpeed({
          ...sprintSpeed, perkSprintSpeed: selectedPerk[0].sprintSpeed,
        })
      } else (sprintSpeed.perkSprintSpeed = 0)
      
      if (selectedPerk[0].magSize) {
        setMagSize({
          ...magSize, perkMag: selectedPerk[0].magSize,
        })
      } else (magSize.perkMag = 0)

      if (selectedPerk[0].hipfireArea) {
        setHipFire({
          ...hipFire, perkHipFire: selectedPerk[0].hipfireArea,
        })
      } else (hipFire.perkHipFire = 0)

      if (selectedPerk[0].sprintToFire) {
        setSprintToFire({
          ...sprintToFire, perkSprintToFire: selectedPerk[0].sprintToFire,
        })
      } else (sprintToFire.perkSprintToFire = 0)

      if (selectedPerk[0].tacSprintToFire) {
        setTacSprint({
          ...tacSprint, perkTacSprint: selectedPerk[0].tacSprintToFire,
        })
      } else (tacSprint.perkTacSprint = 0)

      if (selectedPerk[0].reloadTime) {
        setReloadTime({
          ...reloadTime, perkReload: selectedPerk[0].reloadTime,
        })
      } else (reloadTime.perkReload = 0)

      if (selectedPerk[0].strafeSpeed) {
        setStrafe({
          ...strafe, perkStrafe: selectedPerk[0].strafeSpeed,
        })
      } else (strafe.perkStrafe = 0)

      return selectedPerk
    } 


    return 0
  }


  //Ammo functions

  function getAmmo() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Ammunition' && attachment.attachmentName !== 'None'
        }
      )
    }
    return 0
  }

  function oneAmmo(e) {
    if (attachments && weapon) {
      const selectedAmmo = attachments.filter(
        attachment => {
          return  attachment.weapons.includes(weapon.name) && attachment.attachmentName.includes(e.target.innerHTML)
          
        }
      )

   
      if (selectedAmmo[0].adsModifier){
        setAdsModifier(
          { ...adsModifier, ammoAds: selectedAmmo[0].adsModifier }
        )
      } else (adsModifier.ammoAds = 0)

      if (selectedAmmo[0].rangeModifier){
        setRangeModifier({
          ...rangeModifier, ammoRange: selectedAmmo[0].rangeModifier,
        })
      } else (rangeModifier.ammoRange = 0)

      if (selectedAmmo[0].bulletVelocityModifier) {
        setBulletVelMod({
          ...bulletVelMod, ammoVel: selectedAmmo[0].bulletVelocityModifier,
        })
      } else (bulletVelMod.ammoVel = 0)

      if (selectedAmmo[0].verticalRecoil) {
        setVertRecoil({
          ...vertRecoil, ammoVert: selectedAmmo[0].verticalRecoil,
        })
      } else (vertRecoil.ammoVert = 0)

      if (selectedAmmo[0].horizontalRecoil) {
        setHorizRecoil({
          ...horizRecoil, ammoHoriz: selectedAmmo[0].horizontalRecoil,
        })
      } else (horizRecoil.ammoHoriz = 0)

      if (selectedAmmo[0].movementSpeed) {
        setMovSpeed({
          ...movSpeed, ammoMov: selectedAmmo[0].movementSpeed,
        })
      } else (movSpeed.ammoMov = 0)

      if (selectedAmmo[0].adsMovementSpeed) {
        setAdsMovSpeed({
          ...adsMovSpeed, ammoAdsMov: selectedAmmo[0].adsMovementSpeed,
        })
      } else (adsMovSpeed.ammoAdsMov = 0 )

      if (selectedAmmo[0].sprintSpeed) {
        setSprintSpeed({
          ...sprintSpeed, ammoSprintSpeed: selectedAmmo[0].sprintSpeed,
        })
      } else (sprintSpeed.ammoSprintSpeed = 0)
      
      if (selectedAmmo[0].magSize) {
        setMagSize({
          ...magSize, ammoMag: selectedAmmo[0].magSize,
        })
      } else (magSize.ammoMag = 0)

      if (selectedAmmo[0].hipfireArea) {
        setHipFire({
          ...hipFire, ammoHipFire: selectedAmmo[0].hipfireArea,
        })
      } else (hipFire.ammoHipFire = 0)

      if (selectedAmmo[0].sprintToFire) {
        setSprintToFire({
          ...sprintToFire, ammoSprintToFire: selectedAmmo[0].sprintToFire,
        })
      } else (sprintToFire.ammoSprintToFire = 0)

      if (selectedAmmo[0].tacSprintToFire) {
        setTacSprint({
          ...tacSprint, ammoTacSprint: selectedAmmo[0].tacSprintToFire,
        })
      } else (tacSprint.ammoTacSprint = 0)

      if (selectedAmmo[0].reloadTime) {
        setReloadTime({
          ...reloadTime, ammoReload: selectedAmmo[0].reloadTime,
        })
      } else (reloadTime.ammoReload = 0)

      if (selectedAmmo[0].strafeSpeed) {
        setStrafe({
          ...strafe, ammoStrafe: selectedAmmo[0].strafeSpeed,
        })
      } else (strafe.ammoStrafe = 0)

      return selectedAmmo
    } 


    return 0
  }
  //Grip functions

  function getGrip() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Rear Grip' && attachment.attachmentName !== 'None'
        }
      )
    }
    return 0
  }

  function oneGrip(e) {
    if (attachments && weapon && e.target.innerHTML !== 'Select Grip') {
      const selectedGrip = attachments.filter(
        attachment => {
          return  attachment.weapons.includes(weapon.name) && attachment.attachmentName.includes(e.target.innerHTML)
          
        }
      )

      if (selectedGrip[0].adsModifier){
        setAdsModifier(
          { ...adsModifier, gripAds: selectedGrip[0].adsModifier }
        )
      } else (adsModifier.gripAds = 0)

      if (selectedGrip[0].rangeModifier){
        setRangeModifier({
          ...rangeModifier, gripRange: selectedGrip[0].rangeModifier,
        })
      } else (rangeModifier.gripRange = 0)

      if (selectedGrip[0].bulletVelocityModifier) {
        setBulletVelMod({
          ...bulletVelMod, gripVel: selectedGrip[0].bulletVelocityModifier,
        })
      } else (bulletVelMod.gripVel = 0)

      if (selectedGrip[0].verticalRecoil) {
        setVertRecoil({
          ...vertRecoil, gripVert: selectedGrip[0].verticalRecoil,
        })
      } else (vertRecoil.gripVert = 0)

      if (selectedGrip[0].horizontalRecoil) {
        setHorizRecoil({
          ...horizRecoil, gripHoriz: selectedGrip[0].horizontalRecoil,
        })
      } else (horizRecoil.gripHoriz = 0)

      if (selectedGrip[0].movementSpeed) {
        setMovSpeed({
          ...movSpeed, gripMov: selectedGrip[0].movementSpeed,
        })
      } else (movSpeed.gripMov = 0)

      if (selectedGrip[0].adsMovementSpeed) {
        setAdsMovSpeed({
          ...adsMovSpeed, gripAdsMov: selectedGrip[0].adsMovementSpeed,
        })
      } else (adsMovSpeed.gripAdsMov = 0 )

      if (selectedGrip[0].sprintSpeed) {
        setSprintSpeed({
          ...sprintSpeed, gripSprintSpeed: selectedGrip[0].sprintSpeed,
        })
      } else (sprintSpeed.gripSprintSpeed = 0)
      
      if (selectedGrip[0].magSize) {
        setMagSize({
          ...magSize, gripMag: selectedGrip[0].magSize,
        })
      } else (magSize.gripMag = 0)

      if (selectedGrip[0].hipfireArea) {
        setHipFire({
          ...hipFire, gripHipFire: selectedGrip[0].hipfireArea,
        })
      } else (hipFire.gripHipFire = 0)

      if (selectedGrip[0].sprintToFire) {
        setSprintToFire({
          ...sprintToFire, gripSprintToFire: selectedGrip[0].sprintToFire,
        })
      } else (sprintToFire.gripSprintToFire = 0)

      if (selectedGrip[0].tacSprintToFire) {
        setTacSprint({
          ...tacSprint, gripTacSprint: selectedGrip[0].tacSprintToFire,
        })
      } else (tacSprint.gripTacSprint = 0)

      if (selectedGrip[0].reloadTime) {
        setReloadTime({
          ...reloadTime, gripReload: selectedGrip[0].reloadTime,
        })
      } else (reloadTime.gripReload = 0)

      if (selectedGrip[0].strafeSpeed) {
        setStrafe({
          ...strafe, gripStrafe: selectedGrip[0].strafeSpeed,
        })
      } else (strafe.gripStrafe = 0)

      return selectedGrip
    } 


    return 0
  }


  const setProfileStats = (e) => {
    console.log('set prof', e.target.text)
    setProfile(e.target.text)

  
  }

  console.log('profile here', profile)
 
  
  const getProfileStats = () => {
    if (weapon){
      if (profile && profile.includes('Profile One')) {
        return weapon.profileOne[0]
      }
      if ( profile && profile.includes('Profile Two')) {
        console.log('this is text', profile.text)
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

  console.log('ranges here', getProfileStats().rangeOne)
  //form submit

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await createAClass(weaponId, formData)
      console.log('data here', data)
      navigate('/weapons')
    } catch (err) {
      console.log(err)
      setIsError(err)
    }
  }

  const handleChange = e => {
    console.log('FORM STUFF', e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  console.log('form data', formData)
  console.log('profile', profile)


  return (
    
    <section className='create-class'>
      { weapon && 
      <div>
        <form
          onSubmit={(handleSubmit)}
          className="form">
          <div className="create-header">
            <div>
              <h1>{weapon.name}</h1>
            </div>
            <div className="class-buttons">
              <input 
                placeholder="Name your class"
                onChange={handleChange}
                name="profile"
              ></input>
              <button type="submit" className="button is-info">Create This Class</button>
            </div>
          </div>
       
          <div className='attachments'>
            <div className='main-div'>

              {/*Damage Profile*/}
              <div className='columns is-one-fifth'>
              
                <div className=" column profile-and-create">
                  <button className='button is-black'>Stock</button>
                  <select className='dropdown button'
                    onChange={handleChange}
                    name="profile">
                    <option value={formData.profile}>Select Damage Profile</option>
                    { weapon.profileOne[0] &&
              <option onClick={setProfileStats} value={weapon.profileOne[0].profileName}
              
                text='Profile One'
              >Profile One: {weapon.profileOne[0].profileName}</option>
                    }
                    { weapon.profileTwo[0] &&
              <option value= {weapon.profileTwo[0].profileName}
                onClick={setProfileStats}
                text='Profile Two'
              >Profile Two: {weapon.profileTwo[0].profileName}</option>
                    }
                    { weapon.profileThree[0] &&
              <option value={weapon.profileThree[0].profileName}>Profile Three: {weapon.profileThree[0].profileName}</option>
                    }
                    { weapon.profileFour[0] &&
              <option value={weapon.profileFour[0].profileName}>Profile Four: {weapon.profileFour[0].profileName}</option>
                    }
                    { weapon.profileFive[0] &&
              <option  value={weapon.profileFive[0].profileName}>Profile Five: {weapon.profileFive[0].profileName}</option>
                    }
                  </select>
                </div>
              
                {/*Muzzle*/}
                <div className='column is-one-fifth weapon-part'>
                  <button className='button is-black'>Muzzle</button>
                  { attachments &&
            <select className='dropdown button' 
              onChange={handleChange}
              name="muzzle">
              <option>Select muzzle</option>
              {
                attachments &&
          getMuzzle().map(
            attachment => {
              return (  
                <option 
                  key={attachment._id} 
                  value={attachment.attachmentName} 
                  onClick={oneMuzzle} 
                >
                  {attachment.attachmentName}</option>
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
            <select className='dropdown button'
              onChange={handleChange}
              name="laser">
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
                  { attachments &&
            <select className='dropdown button'
              onChange={handleChange}
              name="barrel">
              <option >None</option>
              {
                attachments &&
          getBarrel().map(
            attachment => {
              return (  
                <option key={attachment._id} 
                  value={attachment.attachmentName} 
                  onClick={oneBarrel}>{attachment.attachmentName}</option>
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
                  { attachments &&
            <select className='dropdown button'
              onChange={handleChange}
              name="optic">
              <option >Select Optic</option>
              {
                attachments &&
          getOptic().map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={oneOptic}>{attachment.attachmentName}</option>
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
                  { attachments &&
            <select className='dropdown button'
              onChange={handleChange}
              name="stock">
              <option >Select Stock</option>
              {
                attachments &&
          getStock().map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={oneStock}>{attachment.attachmentName}</option>
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
                  { attachments &&
            <select className='dropdown button'
              onChange={handleChange}
              name="underBarrel">
              <option >Select Underbarrel</option>
              {
                attachments &&
          getUnderBarrel().map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={oneUnderBarrel} name="Underbarrel">{attachment.attachmentName}</option>
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
            <select className='dropdown button'
              onChange={handleChange}
              name="perk">
              <option disabled >Select Perk</option>
              {
                attachments &&
          getPerk().map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={onePerk} name="Perk">{attachment.attachmentName}</option>
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
            <select className='dropdown button'
              onChange={handleChange}
              name="ammunition">
              <option >Select Ammo</option>
              {
                attachments &&
          getAmmo().map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={oneAmmo} name="Ammo">{attachment.attachmentName}</option>
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
            <select className='dropdown button'
              onChange={handleChange}
              name="rearGrip">
              <option default>Select Grip</option>
              {
                attachments &&
          getGrip().map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={oneGrip} name="Grip">{attachment.attachmentName}</option>
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
                  <div className='variable-stats'>
                    <h1>Gunfight</h1>
                    <h3>ADS Time: {weapon.adsTime + sumAds }</h3>
                    <h3>Reload Time: {weapon.reloadTime + sumReloadTime}</h3>
                    <h3>Bullet Velocity: {weapon.bulletVelocity + sumBulletVel}</h3>
                    <h3>Hipfire Area: {weapon.hipfireArea + sumHipFire}</h3>
                    <h3>Magazine Size: {weapon.magSize + sumMagSize}</h3>
                    <h3>Open Bolt Delay: {weapon.openBoltDelay}</h3>
                  </div>
                }

                <div className='variable-stats'>
                  <h1>Movement</h1>
                  <h3>Movement Speed: {weapon.movementSpeed + sumMovSpeed}</h3>
                  <h3>Strafe Speed: {weapon.strafeSpeed + sumStrafe}</h3>
                  <h3>Sprint To Fire: {weapon.sprintToFire + sumSprintToFire}</h3>
                  <h3>Tactical Sprint To Fire: {weapon.tacSprintToFire + sumTacSprint}</h3>
                  <h3>ADS Movement: {weapon.adsMovementSpeed + sumAdsMovSpeed}</h3>
                </div>

                <div className='variable-stats'>
                  <h1>Recoil</h1>
                  <h3>Vertical Recoil as %: { sumVertRec}</h3>
                  <h3>Horizontal Recoil as %: {sumHorizRec}</h3>
                </div>
              </div>
            
              <div className='stats'>
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
                          <DamageProfileCard key={profile._id} profile={profile} rangeMod={sumRange}/>
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
                          <DamageProfileCard key={profile._id} profile={profile} rangeMod={sumRange}/>
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
                          <DamageProfileCard key={profile._id} profile={profile} rangeMod={sumRange}/>
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