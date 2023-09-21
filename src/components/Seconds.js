import React from 'react';

class Seconds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().getSeconds(),
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
      time: new Date().getSeconds(),
    });
  }

  render() {
    return <li className="nav-seconds">{this.state.time}</li>;
  }
}

export default Seconds;
