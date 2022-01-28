import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function WeaponCard({ weapon }) {
  return (
    <motion.div className="weapon-link">
      <Link to={`/weapons/${weapon._id}`} key={weapon.id}>
        <div className="weapon-card">
          <motion.img className="weapon-image" src={weapon.image} alt={weapon.name} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.2 }}/>
          <motion.h3 className="card-name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.2 }}>{weapon.name}</motion.h3>
        </div>
      </Link>
    </motion.div>
  )
}

export default WeaponCard