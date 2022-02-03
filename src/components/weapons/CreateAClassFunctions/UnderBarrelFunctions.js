function UnderBarrelCard ({ formData, attachments, handleChange, weapon, adsModifier, setAdsModifier, rangeModifier, setRangeModifier, bulletVelMod, setBulletVelMod, vertRecoil, setVertRecoil, horizRecoil, setHorizRecoil, movSpeed, setMovSpeed, adsMovSpeed, setAdsMovSpeed, sprintSpeed, setSprintSpeed, hipFire, setHipFire, sprintToFire, setSprintToFire, tacSprint, setTacSprint, reloadTime, setReloadTime, strafe, setStrafe, attachArray }) {

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
  return (
    <div className='column is-one-fifth weapon-part'>
      <button className='button is-black select-attachment-button'>Underbarrel</button>
      { attachments && ((formData.underBarrel === 'None' && attachArray.length <= 4) || (formData.underBarrel !== 'None')) &&
<select className='dropdown button select-attachment'
  onChange={handleChange}
  name="underBarrel">
  <option 
    className='attachment-dropdown-option'
  >{getUnderBarrel()[0].attachmentName}</option>
  {
    attachments &&
getUnderBarrel().filter(
  attach => {
    return attach.attachmentName !== 'None'
  }
).map(
  attachment => {
    return (  
      <option 
        className='attachment-dropdown-option'
        key={attachment._id} value={attachment.attachmentName} onClick={oneUnderBarrel} name="Underbarrel">{attachment.attachmentName}</option>
    )
  }            
)
  }
</select> 
      }
      { attachments && (formData.underBarrel === 'None' && attachArray.length > 4) &&
      <select className='dropdown button unavailable'
        name='underBarrel'>
        <option>Unavailable</option>

      </select>
        
      }
    </div>


  )
}

export default UnderBarrelCard