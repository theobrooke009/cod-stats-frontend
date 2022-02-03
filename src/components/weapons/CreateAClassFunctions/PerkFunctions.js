function PerkCard ({ formData, attachments, handleChange, weapon, adsModifier, setAdsModifier, rangeModifier, setRangeModifier, bulletVelMod, setBulletVelMod, vertRecoil, setVertRecoil, horizRecoil, setHorizRecoil, movSpeed, setMovSpeed, adsMovSpeed, setAdsMovSpeed, sprintSpeed, setSprintSpeed, hipFire, setHipFire, sprintToFire, setSprintToFire, tacSprint, setTacSprint, reloadTime, setReloadTime, strafe, setStrafe, attachArray }) {

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

  return (
    <div className='column is-one-fifth weapon-part'>
      <button className='button is-black select-attachment-button'>Perk</button>
      { attachments && ((formData.perk === 'None' && attachArray.length <= 4) || (formData.perk !== 'None')) &&
<select className='dropdown button select-attachment'
  onChange={handleChange}
  name="perk">
  <option
    className='attachment-dropdown-option'
  >{getPerk()[0].attachmentName}</option>
  {
    attachments &&
getPerk().filter(
  attach => {
    return attach.attachmentName !== 'None'
  }
).map(
  attachment => {
    return (  
      <option 
        className='attachment-dropdown-option'
        key={attachment._id} value={attachment.attachmentName} onClick={onePerk} name="Perk">{attachment.attachmentName}</option>
    )
  }            
)
  }
</select> 
      }
      { attachments && (formData.perk === 'None' && attachArray.length > 4) &&
      <select className='dropdown button unavailable'
        name='perk'>
        <option>Unavailable</option>

      </select>
        
      }
    </div>

  )
}

export default PerkCard