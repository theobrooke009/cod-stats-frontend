function MuzzleCard({ formData, attachments, display, handleChange, weapon, adsModifier, setAdsModifier, rangeModifier, setRangeModifier, bulletVelMod, setBulletVelMod, vertRecoil, setVertRecoil, horizRecoil, setHorizRecoil, movSpeed, setMovSpeed, adsMovSpeed, setAdsMovSpeed, sprintSpeed, setSprintSpeed, hipFire, setHipFire, sprintToFire, setSprintToFire, tacSprint, setTacSprint, reloadTime, setReloadTime, strafe, setStrafe }) {
  
  function getMuzzle() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Muzzle'
        }
      )
    }
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

 

  return (
    <div className='column is-one-fifth weapon-part'>
      <button className='button is-black'>Muzzle</button>
      { attachments && ((formData.muzzle === 'None' && display) || (formData.muzzle !== 'None')) &&
<select className='dropdown button' 
  onChange={handleChange}
  name="muzzle">
  {
    <option>{getMuzzle()[0].attachmentName}</option>
  } 


  {
    attachments &&
getMuzzle().filter(
  attach => {
    return attach.attachmentName !== 'None'
  }
).map(
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
      { attachments && (formData.muzzle === 'None' && !display) &&
    <select className='dropdown button'
      name='muzzle'>
      <option>Unavailable</option>

    </select>
      
      }
    </div>
  
  
  
  )
}

export default MuzzleCard