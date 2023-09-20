// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = matchCardDetails

  const claName = matchStatus === `Won` ? 'won' : 'loss'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="title">{competingTeam}</p>
      <p className="description">{result}</p>
      <p className={claName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
