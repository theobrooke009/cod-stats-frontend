function BarrelCard ({ formData, attachments, handleChange, weapon, adsModifier, setAdsModifier, rangeModifier, setRangeModifier, bulletVelMod, setBulletVelMod, vertRecoil, setVertRecoil, horizRecoil, setHorizRecoil, movSpeed, setMovSpeed, adsMovSpeed, setAdsMovSpeed, sprintSpeed, setSprintSpeed, hipFire, setHipFire, sprintToFire, setSprintToFire, tacSprint, setTacSprint, reloadTime, setReloadTime, strafe, setStrafe, attachArray }) {

  function getBarrel() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Barrel' 
          // & attachment.attachmentName !== 'None'
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

  return (
    <div className='column is-one-fifth weapon-part'>
      <button className='button is-black select-attachment-button'>Barrel</button>
      { attachments && ((formData.barrel === 'None' && attachArray.length <= 4) || (formData.barrel !== 'None')) &&
            <select className='dropdown button select-attachment'
              onChange={handleChange}
              name="barrel">
              <option className='attachment-dropdown-option'>{getBarrel()[0].attachmentName}</option>
              {
                attachments &&
          getBarrel().filter(
            attach => {
              return attach.attachmentName !== 'None'
            }
          ).map(
            attachment => {
              return (  
                <option className='attachment-dropdown-option' key={attachment._id} 
                  value={attachment.attachmentName} 
                  onClick={oneBarrel}>{attachment.attachmentName}</option>
              )
            }            
          )
              }
            </select> 
      }
      { attachments && (formData.barrel === 'None' && attachArray.length > 4) &&
                  <select 
                    className='dropdown button unavailable'
                    name='barrel'>
                    <option className='unavailable'>Unavailable</option>

                  </select>
                    
      }
    </div>
  )

}

export default BarrelCard