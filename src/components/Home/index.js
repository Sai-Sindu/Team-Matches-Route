// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCards: {}, isLoading: true}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCards: updatedData, isLoading: false})
  }

  render() {
    const {teamCards, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="home-header-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="home-header-logo"
          />
          <h1 className="home-header-title">IPL Dashboard</h1>
        </div>
        <div className="team-list-cards-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamCards.map(eachCard => (
              <TeamCard teamCardDetails={eachCard} key={eachCard.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}
export default Home
