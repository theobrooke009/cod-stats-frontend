import { Link } from 'react-router-dom'

function UserWeaponCard({ weapon }) {

  return (
    <div className='user-weapon-image'>
      <Link to={`/userweapons/${weapon._id}`} key={weapon.id}>
        <div className="weapon-card">
          <img src={weapon.buildImage} alt={weapon.name} />
          <h3>{weapon.name}</h3>
        </div>
      </Link>
    </div>
  )
}

export default UserWeaponCard