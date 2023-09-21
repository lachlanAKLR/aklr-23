import React from 'react';

class Hours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().getHours(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().getHours(),
    });
  }

  render() {
    return <li className="nav-hours">{this.state.time}</li>;
  }
}

export default Hours;
