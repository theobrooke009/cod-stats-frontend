function GripCard({ formData, attachments, display, handleChange, weapon, adsModifier, setAdsModifier, rangeModifier, setRangeModifier, bulletVelMod, setBulletVelMod, vertRecoil, setVertRecoil, horizRecoil, setHorizRecoil, movSpeed, setMovSpeed, adsMovSpeed, setAdsMovSpeed, sprintSpeed, setSprintSpeed, hipFire, setHipFire, sprintToFire, setSprintToFire, tacSprint, setTacSprint, reloadTime, setReloadTime, strafe, setStrafe }) {

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

  return (
    <div className='column is-one-fifth weapon-part'>
      <button className='button is-black'>Grip</button>
      { attachments && ((formData.rearGrip === 'None' && display) || (formData.rearGrip !== 'None')) &&
<select className='dropdown button'
  onChange={handleChange}
  name="rearGrip">
  <option default>{getGrip()[0].attachmentName}</option>
  {
    attachments &&
getGrip().filter(
  attach => {
    return attach.attachmentName !== 'None'
  }
).map(
  attachment => {
    return (  
      <option key={attachment._id} value={attachment.attachmentName} onClick={oneGrip} name="Grip">{attachment.attachmentName}</option>
    )
  }            
)
  }
</select> 
      }
      { attachments && (formData.rearGrip === 'None' && !display) &&
      <select className='dropdown button'
        name='rearGrip'>
        <option>Unavailable</option>

      </select>
        
      }
    </div>

  )
}

export default GripCard