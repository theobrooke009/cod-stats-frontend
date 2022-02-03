function StockCard ({ formData, attachments, handleChange, weapon, adsModifier, setAdsModifier, rangeModifier, setRangeModifier, bulletVelMod, setBulletVelMod, vertRecoil, setVertRecoil, horizRecoil, setHorizRecoil, movSpeed, setMovSpeed, adsMovSpeed, setAdsMovSpeed, sprintSpeed, setSprintSpeed, hipFire, setHipFire, sprintToFire, setSprintToFire, tacSprint, setTacSprint, reloadTime, setReloadTime, strafe, setStrafe, attachArray }) {

  function getStock() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Stock'
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

  return (
    <div className='column is-one-fifth weapon-part'>
      <button className='button is-black select-attachment-button'>Stock</button>
      { attachments && ((formData.stock === 'None' && attachArray.length <= 4) || (formData.stock !== 'None')) &&
<select className='dropdown button select-attachment'
  onChange={handleChange}
  name="stock">
  <option 
    className='attachment-dropdown-option'
  >{getStock()[0].attachmentName}</option>
  {
    attachments &&
getStock().filter(
  attach => {
    return attach.attachmentName !== 'None'
  }
).map(
  attachment => {
    return (  
      <option 
        className='attachment-dropdown-option'
        key={attachment._id} value={attachment.attachmentName} onClick={oneStock}>{attachment.attachmentName}</option>
    )
  }            
)
  }
</select> 
      }

      { attachments && (formData.stock === 'None' && attachArray.length > 4) &&
      <select className='dropdown button unavailable'
        name='stock'>
        <option>Unavailable</option>

      </select>
        
      }

    </div>
  )
}

export default StockCard