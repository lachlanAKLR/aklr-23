import React from 'react';

class Minutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().getMinutes(),
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
      time: new Date().getMinutes(),
    });
  }

  render() {
    return <li className="nav-minutes">{this.state.time}</li>;
  }
}

export default Minutes;
