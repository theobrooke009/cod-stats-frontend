function OpticCard({ formData, attachments, display, handleChange, weapon, adsModifier, setAdsModifier, rangeModifier, setRangeModifier, bulletVelMod, setBulletVelMod, vertRecoil, setVertRecoil, horizRecoil, setHorizRecoil, movSpeed, setMovSpeed, adsMovSpeed, setAdsMovSpeed, sprintSpeed, setSprintSpeed, hipFire, setHipFire, sprintToFire, setSprintToFire, tacSprint, setTacSprint, reloadTime, setReloadTime, strafe, setStrafe }) {

  function getOptic() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Optic' 
          // && attachment.attachmentName !== 'None'
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

  return (
    <div className='column is-one-fifth weapon-part'>
      <button className='button is-black'>Optic</button>
      { attachments && ((formData.optic === 'None' && display) || (formData.optic !== 'None')) &&
            <select className='dropdown button'
              onChange={handleChange}
              name="optic">
              <option >{getOptic()[0].attachmentName}</option>
              {
                attachments &&
          getOptic().filter(
            attach => {
              return attach.attachmentName !== 'None'
            }
          ).map(
            attachment => {
              return (  
                <option key={attachment._id} value={attachment.attachmentName} onClick={oneOptic}>{attachment.attachmentName}</option>
              )
            }            
          )
              }
            </select> 
      }

      { attachments && (formData.optic === 'None' && !display) &&
                  <select className='dropdown button'
                    name='optic'>
                    <option>Unavailable</option>

                  </select>
                    
      }
    </div>
              
  )
}

export default OpticCard