import React from "react";
import TextInputField from "../components/TextInputField";

class ActivityForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event:"",
      body:"",
      location:"",
      day:""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value})
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      event:"",
      body:"",
      location:"",
      day:""
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const formPayload = {
      event: this.state.event,
      body: this.state.body,
      location: this.state.location,
      day: this.state.day
    }
    this.props.addActivity(formPayload);
    this.handleClearForm(event);
  }

  render() {
    return(
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="medium-3 cell">
            <form className="callout" onSubmit={this.handleSubmit}>
              <TextInputField
                content={this.state.event}
                label="Event"
                name="event"
                handleChange={this.handleChange}
              />
              <TextInputField
                content={this.state.location}
                label="Location"
                name="location"
                handleChange={this.handleChange}
              />
              <TextInputField
                content={this.state.body}
                label="Notes"
                name="body"
                handleChange={this.handleChange}
              />
              <TextInputField
                content={this.state.day}
                label="Day"
                name="day"
                handleChange={this.handleChange}
              />
              <div>
                <input className="button" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ActivityForm;
