import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Joy Egwuatu",
        bio: "I am a front-end developer......",
        imgSrc: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
        profession: "Software Engineer"
      },
      shows: false,
      elapsedTime: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      elapsedTime: this.state.elapsedTime + 1
    });
  }

  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  }

  render() {
    const { person, shows, elapsedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {shows && (
          <div>
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt="Profile" style={{width: "200px"}} />
            <p>Bio: {person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since last component mount: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;