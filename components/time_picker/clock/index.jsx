import React from 'react';
import style from './style';
import time from '../../utils/time';
import Hours from './hours';
import Minutes from './minutes';

class Clock extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    display: React.PropTypes.oneOf(['hours', 'minutes']),
    format: React.PropTypes.oneOf(['24hr', 'ampm']),
    initialTime: React.PropTypes.object,
    onChange: React.PropTypes.func
  };

  static defaultProps = {
    className: '',
    display: 'hours',
    format: '24hr',
    initialTime: new Date()
  };

  state = {
    center: {x: null, y: null},
    radius: 0,
    time: this.props.initialTime
  };

  componentDidMount () {
    window.addEventListener('resize', this.handleCalculateShape);
    this.handleCalculateShape();
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleCalculateShape);
  }

  handleHourChange = (hours) => {
    if (this.state.time.getHours() !== hours) {
      const newTime = time.setHours(this.state.time, this.adaptHourToFormat(hours));
      this.setState({time: newTime});
      if (this.props.onChange) this.props.onChange(newTime);
    }
  };

  handleMinuteChange = (minutes) => {
    if (this.state.time.getMinutes() !== minutes) {
      const newTime = time.setMinutes(this.state.time, minutes);
      this.setState({time: newTime});
      if (this.props.onChange) this.props.onChange(newTime);
    }
  };

  handleCalculateShape = () => {
    const { top, left, width } = this.refs.wrapper.getBoundingClientRect();
    this.setState({
      center: { x: left + width / 2, y: top + width / 2 },
      radius: width / 2
    });
  };

  toggleTimeMode () {
    const newTime = time.toggleTimeMode(this.state.time);
    this.setState({time: newTime});
    if (this.props.onChange) this.props.onChange(newTime);
  }

  adaptHourToFormat (hour) {
    if (this.props.format === 'ampm') {
      if (time.getTimeMode(this.state.time) === 'pm') {
        return hour < 12 ? hour + 12 : hour;
      } else {
        return hour === 12 ? 0 : hour;
      }
    } else {
      return hour;
    }
  }

  renderHours () {
    return (
      <Hours
        center={this.state.center}
        format={this.props.format}
        onChange={this.handleHourChange}
        radius={this.state.radius}
        selected={this.state.time.getHours()}
        spacing={this.state.radius * 0.18}
      />
    );
  }

  renderMinutes () {
    return (
      <Minutes
        center={this.state.center}
        onChange={this.handleMinuteChange}
        radius={this.state.radius}
        selected={this.state.time.getMinutes()}
        spacing={this.state.radius * 0.18}
      />
    );
  }

  render () {
    return (
      <div data-react-toolbox='clock' className={style.root}>
        <div ref='wrapper' className={style.wrapper} style={{height: this.state.radius * 2}}>
          { this.props.display === 'hours' ? this.renderHours() : '' }
          { this.props.display === 'minutes' ? this.renderMinutes() : '' }
        </div>
      </div>
    );
  }
}

export default Clock;
