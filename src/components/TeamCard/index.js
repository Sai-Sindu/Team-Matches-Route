// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails
  return (
    <Link to={`/team-matches/${id}`} className="link-card">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-card-img" />
        <p className="team-card-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
