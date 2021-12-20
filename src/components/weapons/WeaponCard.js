import { Link } from 'react-router-dom'

function WeaponCard({ weapon }) {
  return (
    <div>
      <Link to={`/weapons/${weapon._id}/`} key={weapon.id}>
        <div className="weapon-card">
          <img src={weapon.image} alt={weapon.name}/>
          <h3>{weapon.name}</h3>
          <h3>{weapon.weaponType}</h3>
        </div>
      </Link>
    </div>
  )
}

export default WeaponCard