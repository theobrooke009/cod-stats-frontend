function LaserCard ({ formData, attachments, handleChange, weapon, adsModifier, setAdsModifier, rangeModifier, setRangeModifier, bulletVelMod, setBulletVelMod, vertRecoil, setVertRecoil, horizRecoil, setHorizRecoil, movSpeed, setMovSpeed, adsMovSpeed, setAdsMovSpeed, sprintSpeed, setSprintSpeed, hipFire, setHipFire, sprintToFire, setSprintToFire, tacSprint, setTacSprint, reloadTime, setReloadTime, strafe, setStrafe, attachArray }) {

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


  return (
    <div className='column is-one-fifth weapon-part'>
      <button  className='button is-black select-attachment-button'>Laser</button>
      { attachments && ((formData.laser === 'None' && attachArray.length <= 4) || (formData.laser !== 'None')) &&
            <select className='dropdown button select-attachment'
              onChange={handleChange}
              name="laser">
              <option
                className='attachment-dropdown-option'
              >{getLaser()[0].attachmentName}</option>
              {
                attachments &&
          getLaser().filter(
            attach => {
              return attach.attachmentName !== 'None'
            }
          ).map(
            attachment => {
              return (  
                <option 
                  className='attachment-dropdown-option'
                  key={attachment._id} value={attachment.attachmentName} onClick={oneLaser}>{attachment.attachmentName}</option>
              )
            }            
          )
              }
            </select> 
      }
      { attachments && (formData.laser === 'None' && attachArray.length > 4) &&
                  <select className='dropdown button unavailable'
                    name='laser'>
                    <option>Unavailable</option>

                  </select>
                    
      }
    </div>

  )
}

export default LaserCard