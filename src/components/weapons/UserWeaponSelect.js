import React from 'react'
import { getAllUserGuns } from '../lib/api.js'
import UserWeaponSelect from './WeaponCards/UserWeaponSelect.js'


function WeaponList() {
  const [weapons, setWeapons] = React.useState(null)
  const [game, setGame] = React.useState('Modern Warfare')
  const [type, setType] = React.useState('')
  const [isError, setIsError] = React.useState(false)
  const [isActive, setisActive] = React.useState(false)


  console.log('here',weapons)
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllUserGuns()
        setWeapons(response.data)
      } catch (err) {
        setIsError(true)
        console.log('error is', err)
      }
    }
    getData()
  }, [])

  
  function setGameState(e){
    console.log(e.target.innerText)
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
      <div className="logo-div">
        <img className="logo-image"src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1643249938/cod/pngaaa.com-665123_omjtgo.png"/>
      </div>
      <div className='game-buttons'>
        <button className='button is-black is-focused'
          onClick={setGameState}>Modern Warfare</button>
        <button className='button is-black is-focused'
          onClick={setGameState}>Cold War</button>
        <button className='button is-black is-focused'
          onClick={setGameState}>Vanguard</button>
      </div>

      <div className='container columns'>
        <div className='column type-column is-one-fifth'>
                  
          <div
            onClick={() => {
              setisActive(!isActive)
            }}
            role="button"
            className={`dropdown mobile-drop ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
          >
            <div className = "dropdown-trigger">
              <button className = "button  mobile-drop is-black" aria-haspopup = "true" aria-controls = "dropdown-menu">
                <span className="select-head">Weapon Class</span>
                <span className = "icon is-small is-white">
                  <i className = "fa fa-angle-down is-white" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div className = "dropdown-menu" id = "dropdown-menu" role = "menu">
              <div className = "dropdown-content">
                <a onClick={setWeaponType} className = "dropdown-item">Assault Rifle</a>
                <hr className = "dropdown-divider"/>
                <a onClick={setWeaponType} className = "dropdown-item">SMG</a>
                <hr className = "dropdown-divider"/>
                <a href = "#" className = "dropdown-item is-active">LMG</a>
                <hr className = "dropdown-divider"/>
                <a onClick={setWeaponType} className = "dropdown-item">Sniper</a>
                <hr className = "dropdown-divider"/>
                <a onClick={setWeaponType} className = "dropdown-item">Shotgun</a>
              </div>
            </div>
          </div>
          <div className='reset-div'>
            <button className="button mobile-reset is-black" onClick={setWeaponType} >Reset</button>
          </div>
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
          {isError && <h1>{isError}</h1>}
          <div className='weapon-cards'>
            {
              showWeapons().sort(function(a, b) {
                if (a.addedAt < b.addedAt ) { 
                  return -1
                } if (a.addedAt  > b.addedAt ) {
                  return 1
                }
              }).map(weapon => (
                <UserWeaponSelect  key={weapon._id} weapon={weapon} />
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