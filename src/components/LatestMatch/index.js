// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latest} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      result,
      secondInnings,
      umpires,
      venue,
    } = latest
    console.log({latest})

    return (
      <div className="latest-match-card">
        <div className="latest-match-details1">
          <p className="competing-team">{competingTeam}</p>
          <p className="latest-match-date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
        <div className="latest-match-details2">
          <p className="match-details2-title">First Innings</p>
          <p className="match-details2-result">{firstInnings}</p>
          <p className="match-details2-title">Second Innings</p>
          <p className="match-details2-result">{secondInnings}</p>
          <p className="match-details2-title">Man Of The Match</p>
          <p className="match-details2-result">{manOfTheMatch}</p>
          <p className="match-details2-title">Umpires</p>
          <p className="match-details2-result">{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
