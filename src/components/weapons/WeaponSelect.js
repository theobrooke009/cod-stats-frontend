import React from 'react'
import { getAllGuns } from '../lib/api'
// import WeaponCard from './WeaponCard.js'

function WeaponList() {
  const [weapons, setWeapons] = React.useState(null)
  const [isError, setIsError] = React.useState(false)

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

  console.log(weapons)
  console.log(isError)

  return (
    <section>
      <div>
        <div className="create a class slots">
          <div className="class slot-one">
            <h2>CUSTOM CLASS 1</h2>
          </div>
          <div className="class slot-two">
            <h2>CUSTOM CLASS 2</h2>

          </div>
          <div className="class slot-three">
            <h2>CUSTOM CLASS 3</h2>
          </div>
          <div className="class slot-four">
            <h2>CUSTOM CLASS 4</h2>
          </div>
          <div className="class slot-five">
            <h2>CUSTOM CLASS 5</h2>
          </div>
          <div className="class slot-six">
            <h2>CUSTOM CLASS 6</h2>
          </div>
          <div className="class slot-seven">
            <h2>CUSTOM CLASS 7</h2>
          </div>
          <div className="class slot-eight">
            <h2>CUSTOM CLASS 8</h2>
          </div>
          <div className="class slot-nine">
            <h2>CUSTOM CLASS 9</h2>
          </div>
          <div className="class slot-ten">
            <h2>CUSTOM CLASS 10</h2>
          </div>



        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default WeaponList