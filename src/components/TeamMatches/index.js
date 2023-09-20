// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesList: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchData = await response.json()

    const updatedTeam = {
      teamBannerUrl: matchData.team_banner_url,
      latestMatchDetails: {
        competingTeam: matchData.latest_match_details.competing_team,
        competingTeamLogo: matchData.latest_match_details.competing_team_logo,
        date: matchData.latest_match_details.date,
        firstInnings: matchData.latest_match_details.first_innings,
        id: matchData.latest_match_details.id,
        manOfTheMatch: matchData.latest_match_details.man_of_the_match,
        matchStatus: matchData.latest_match_details.match_status,
        result: matchData.latest_match_details.result,
        secondInnings: matchData.latest_match_details.second_innings,
        umpires: matchData.latest_match_details.umpires,
        venue: matchData.latest_match_details.venue,
      },
      recentMatches: matchData.recent_matches.map(eachRecentMatch => ({
        competingTeam: eachRecentMatch.competing_team,
        competingTeamLogo: eachRecentMatch.competing_team_logo,
        date: eachRecentMatch.date,
        firstInnings: eachRecentMatch.first_innings,
        id: eachRecentMatch.id,
        manOfTheMatch: eachRecentMatch.man_of_the_match,
        matchStatus: eachRecentMatch.match_status,
        result: eachRecentMatch.result,
        secondInnings: eachRecentMatch.second_innings,
        umpires: eachRecentMatch.umpires,
        venue: eachRecentMatch.venue,
      })),
    }

    this.setState({teamMatchesList: updatedTeam, isLoading: false})
  }

  renderTeamMatches() {
    const {teamMatchesList} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatchesList
    console.log(latestMatchDetails)
    return (
      <div className="team-matches-container">
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-matches-img"
        />
        <p className="latest-match">Latest Match</p>
        <LatestMatch latest={latestMatchDetails} />
        {this.renderRecentMatchesList()}
      </div>
    )
  }

  renderRecentMatchesList = () => {
    const {teamMatchesList} = this.state
    const {recentMatches} = teamMatchesList
    return (
      <ul className="recent-matches-list">
        {recentMatches.map(eachMatch => (
          <MatchCard matchCardDetails={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return <>{isLoading ? this.renderLoader() : this.renderTeamMatches()}</>
  }
}

export default TeamMatches
