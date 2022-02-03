function AmmoCard ({ formData, attachments, handleChange, weapon, adsModifier, setAdsModifier, rangeModifier, setRangeModifier, bulletVelMod, setBulletVelMod, vertRecoil, setVertRecoil, horizRecoil, setHorizRecoil, movSpeed, setMovSpeed, adsMovSpeed, setAdsMovSpeed, sprintSpeed, setSprintSpeed, hipFire, setHipFire, sprintToFire, setSprintToFire, tacSprint, setTacSprint, reloadTime, setReloadTime, strafe, setStrafe, setProfileStats, setMagSize, attachArray }) {
  
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


  return (
    <div className=" column is-one-fifth weapon-part">
                  
      <button className='button is-black select-attachment-button'>Ammo</button>
      { attachments && ((formData.profile === 'None' && attachArray.length <= 4) || (formData.profile !== 'None')) &&
        <select className='dropdown button select-attachment'
          onChange={handleChange}
          name="profile">
          <option 
            className='attachment-dropdown-option'
            text='Profile One' onClick={setProfileStats} value={weapon.profileOne[0].profileName}>{weapon.profileOne[0].profileName}</option>

          { weapon.profileTwo[0] &&
  <option 
    className='attachment-dropdown-option'
    value= {weapon.profileTwo[0].profileName}
    onClick={setProfileStats}
    text='Profile Two'
  >Profile Two: {weapon.profileTwo[0].profileName}</option>
          }
          { weapon.profileThree[0] &&
  <option 
    className='attachment-dropdown-option'
    onClick={setProfileStats}
    text='Profile Three'
    value={weapon.profileThree[0].profileName}>Profile Three: {weapon.profileThree[0].profileName}</option>
          }
          { weapon.profileFour[0] &&
  <option value={weapon.profileFour[0].profileName}
    onClick={setProfileStats}
    text='Profile Four'
  >Profile Four: {weapon.profileFour[0].profileName}</option>
          }
          { weapon.profileFive[0] &&
  <option  className='attachment-dropdown-option' value={weapon.profileFive[0].profileName}
    onClick={setProfileStats}
    text='Profile Five'
  >Profile Five: {weapon.profileFive[0].profileName}</option>
          }
          {
            attachments &&
getAmmo().filter(
  attach => {
    return attach.attachmentName !== 'None'
  }
).map(
  attachment => {
    return (  
      <option className='attachment-dropdown-option' key={attachment._id} value={attachment.attachmentName}  text='Profile One' onClick={ (e)=> { 
        oneAmmo(e); setProfileStats(e); setMagSize(weapon.magSize + attachment.magSize)
      }
      } name="Ammo">{attachment.attachmentName}</option>
    )
  }            
)
          }
        </select>
      }
      { attachments && (formData.profile === 'None' && attachArray.length > 4) &&
      <select className='dropdown button unavailable'
        name='barrel'>
        <option className='attachment-dropdown-option'>Unavailable</option>

      </select>
      }
        
    </div>
  )
}

export default AmmoCard