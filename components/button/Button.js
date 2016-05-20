import React from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import FontIcon from '../font_icon';
import Ripple from '../ripple';

class Button extends React.Component {
  static propTypes = {
    accent: React.PropTypes.bool,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    flat: React.PropTypes.bool,
    floating: React.PropTypes.bool,
    href: React.PropTypes.string,
    icon: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element
    ]),
    inverse: React.PropTypes.bool,
    label: React.PropTypes.string,
    mini: React.PropTypes.bool,
    neutral: React.PropTypes.bool,
    onMouseLeave: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
    primary: React.PropTypes.bool,
    raised: React.PropTypes.bool,
    theme: React.PropTypes.object,
    type: React.PropTypes.string
  };

  static defaultProps = {
    accent: false,
    className: '',
    flat: false,
    floating: false,
    mini: false,
    neutral: true,
    primary: false,
    raised: false
  };

  handleMouseUp = (event) => {
    this.refs.button.blur();
    if (this.props.onMouseUp) this.props.onMouseUp(event);
  };

  handleMouseLeave = (event) => {
    this.refs.button.blur();
    if (this.props.onMouseLeave) this.props.onMouseLeave(event);
  };

  render () {
    const { accent, children, className, flat, floating, href, icon,
      inverse, label, mini, neutral, primary, theme, raised, ...others} = this.props;
    const element = href ? 'a' : 'button';
    const level = primary ? 'primary' : accent ? 'accent' : 'neutral';
    const shape = flat ? 'flat' : raised ? 'raised' : floating ? 'floating' : 'flat';

    const classes = classnames(theme.button, [theme[shape]], {
      [theme[level]]: neutral,
      [theme.mini]: mini,
      [theme.inverse]: inverse
    }, className);

    const props = {
      ...others,
      href,
      ref: 'button',
      className: classes,
      disabled: this.props.disabled,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      'data-react-toolbox': 'button'
    };

    return React.createElement(element, props,
      icon ? <FontIcon className={theme.icon} value={icon}/> : null,
      label,
      children
    );
  }
}

const RawButton = themr('ToolboxButton')(Button);
export default themr('ToolboxButton')(Ripple({centered: false})(Button));
export { RawButton as RawButton };
