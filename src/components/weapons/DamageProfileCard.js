function DamageProfileCard({ profile, rangeMod }) {
 


  function rangeModPercent() {
    let rangeModifier = (rangeMod / 100)
    if (rangeModifier < 0) {
      rangeModifier * -1
      return (100 + (rangeModifier * 100)) / 100
    } else if (rangeModifier > 0) {
      return (((rangeModifier / 100) * 100) + 1).toFixed(2)
    } else return rangeModifier = 1
  }
  console.log('percent', rangeModPercent())
  console.log('start', profile.rangeStart)

  return (

    <div className='damage-ranges'>
      
      <div className='start-range'>
        { profile.rangeEnd > 300 &&
          <h1 className='range-value hidden-value'>Range Start: {(profile.rangeStart * rangeModPercent()).toFixed(1)} + meters
          </h1>
          
        }

        { profile.rangeEnd < 300 && 
          <h1 className='range-value'>Range Start: {(profile.rangeStart * rangeModPercent()).toFixed(1)} meters
          </h1>
        }
      </div>
      { profile.rangeEnd < 300 &&
        <div className='end-range'>
          <h1>Range End: {(profile.rangeEnd * rangeModPercent()).toFixed(1)} meters</h1>
        </div>
      }

      <div className='damage-range'>
        <h3>Head Damage: {profile.headDamage}</h3>
      </div>

      <div className='damage-range'>
        <h3>Neck Damage: {profile.neckDamage}</h3>
      </div>

      <div className='damage-range'>
        <h3>Chest Damage: {profile.chestDamage}</h3>
      </div>

      <div className='damage-range'>
        <h3>Stomach Damage: {profile.stomachDamage}</h3>
      </div>

      <div className='damage-range'>
        <h3>Extremeties Damage: {profile.extremetiesDamage}</h3>
      </div>

    </div>

  )
}

export default DamageProfileCard