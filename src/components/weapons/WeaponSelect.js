import React from 'react'
import { getAllGuns } from '../lib/api.js'
import WeaponCard from './WeaponCard.js'


function WeaponList() {
  const [weapons, setWeapons] = React.useState(null)
  const [game, setGame] = React.useState('Modern Warfare')
  const [type, setType] = React.useState('')
  const [isError, setIsError] = React.useState(false)


  console.log('here',weapons)
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllGuns()
        setWeapons(response.data)
      } catch (err) {
        setIsError(true)
        console.log('error is', err)
      }
    }
    getData()
  }, [])

  
  function setGameState(e){
    setGame(e.target.innerText)
    // setType('')
  }

  function setWeaponType(e){
    if (e.target.innerText === 'Reset'){
      setType('')
    } else
      setType(e.target.innerText)
  }

  function showWeapons(){
    if (weapons && type === ''){
      if (weapons && game === 'Modern Warfare')
        return weapons.filter(
          weapon => {
            return weapon.gameFrom === 'Modern Warfare'
          }
        )

      if (weapons && game === 'Cold War')
        return weapons.filter(
          weapon => {
            return weapon.gameFrom === 'Cold War'
          }
        )

      if (weapons && game === 'Vanguard')
        return weapons.filter(
          weapon => {
            return weapon.gameFrom === 'Vanguard'
          }
        )
    } else {
      if (weapons && game === 'Modern Warfare')
        return weapons.filter(
          weapon => {
            return weapon.gameFrom === 'Modern Warfare' && weapon.weaponType === type
          }
        )

      if (weapons && game === 'Cold War')
        return weapons.filter(
          weapon => {
            return weapon.gameFrom === 'Cold War' && weapon.weaponType === type
          }
        )

      if (weapons && game === 'Vanguard')
        return weapons.filter(
          weapon => {
            return weapon.gameFrom === 'Vanguard' && weapon.weaponType === type
          }
        )
    }
    
   
  }

  return (
    <section>
      <div className='game-buttons'>
        <button className='button is-black is-focused'
          onClick={setGameState}>Modern Warfare</button>
        <button className='button is-black is-focused'
          onClick={setGameState}>Cold War</button>
        <button className='button is-black is-focused'
          onClick={setGameState}>Vanguard</button>
      </div>

      <div className='container columns'>
        <div className='column is-one-fifth'>
          <div className='weapon-type-buttons'>
            <button className='button is-black is-focused'
              onClick={setWeaponType}
            >Assault Rifle</button>

            <button className='button is-black is-focused'
              onClick={setWeaponType}
            >SMG</button>

            <button className='button is-black is-focused'
              onClick={setWeaponType}
            >LMG</button>

            <button className='button is-black is-focused'
              onClick={setWeaponType}
            >Shotgun</button>

            <button className='button is-black is-focused'
              onClick={setWeaponType}
            >Sniper</button>

            <button className='button is-black is-focused'
              onClick={setWeaponType}
            >Pistol</button>

            <button className='button is-black is-focused'
              onClick={setWeaponType}
            >Reset</button>

          </div>
        </div>
       
        <div className='column is-full big-column'>

          {weapons && game &&
        <div className='weapons-container'>
          {isError && <h1>error</h1>}
          <div className='weapon-cards'>
            {
              showWeapons().sort(function(a, b) {
                if (a.name < b.name) { 
                  return -1
                } if (a.name > b.name) {
                  return 1
                }
              }).map(weapon => (
                <WeaponCard key={weapon._id} weapon={weapon} />
              ))
            }

          </div>
          
        </div>}
        </div>
        

      </div>


   
    </section>
  )
}

export default WeaponList