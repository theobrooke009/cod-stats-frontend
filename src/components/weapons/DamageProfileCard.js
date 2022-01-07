function DamageProfileCard({ profile }) {
  return (

    <div className='damage-ranges'>
      
      <div className='damage-range'>
        { profile.rangeEnd > 300 && 
          <h1 className='range-value'>Range Start: {profile.rangeStart} + meters
          </h1>
        }

        { profile.rangeEnd < 300 && 
          <h1 className='range-value'>Range Start: {profile.rangeStart} meters
          </h1>
        }
      </div>
      { profile.rangeEnd < 300 &&
        <div className='range-value'>
          <h1>Range End: {profile.rangeEnd} meters</h1>
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