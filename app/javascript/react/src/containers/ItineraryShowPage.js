import React, { Component } from 'react';
import ActivityTile from "../components/ActivityTile";
import ActivityForm from "../components/ActivityForm";
import DaysContainer from "../containers/DaysContainer";
import AddDay from "../components/AddDay";


class ItineraryShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.match.params.id,
      itineraryId: this.props.match.params.itinerary_id,
      days: []
    }
    this.fetchUser = this.fetchUser.bind(this)
    this.fetchDays = this.fetchDays.bind(this)
    this.addActivity = this.addActivity.bind(this)
  }
  componentDidMount() {
    this.fetchUser()
    this.fetchDays()
  }

  fetchUser() {
    fetch(`/api/v1/users/${this.state.userId}`, {
      credentials: "same-origin"
    }).then(res => res.json())
    .then(data => {
      this.setState({
        user: data
      })
    })
  }

  fetchDays() {
    fetch(`/api/v1/users/${this.state.userId}/itineraries/${this.state.itineraryId}`, {
      credentials: "same-origin"
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        days: data.itinerary.days
      })
    })
  }

  addActivity(formPayload) {
    fetch(`/api/v1/users/${this.state.userId}/itineraries/${this.state.itineraryId}`, {
      credentials: "same-origin",
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formPayload)
    }).then(() => {
      this.fetchDays()
    })
  }

  addDay() {
    let newState = this.state;
    newState.days.push(
      <DaysContainer />
    )
    this.setState(newState);
  }

  render() {
    // console.log(this.state.days)
    let addActivity = (formPayload) => this.addActivity(formPayload)
    return(this.state.days.length > 0 &&
      <div>
        <DaysContainer
          // id={this.state.days.day.id}
          // key={day.id}
          days={this.state.days}
          addActivity={this.addActivity}
          itineraryId={this.state.itineraryId}
        />
        <AddDay addDay={this.addDay}/>
      </div>
    )
  }
}

export default ItineraryShowPage
