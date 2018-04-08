import { h, Component } from 'preact';
import PropTypes from 'prop-types';

import Calendar from './svgs/calendar.js';
import Contact from './svgs/contact.js';
import Download from './svgs/download.js';
import Login from './svgs/login.js';
import Signup from './svgs/signup.js';

const icons = {
  calendar: Calendar,
  contact: Contact,
  download: Download,
  login: Login,
  signup: Signup
};

const Icon = props => {
  const { size, height, width, name, ...additionalProps } = props;
  const IconComponent = icons[name];
  const sizing = size ? { width: size, height: size } : { width, height };

  return IconComponent ? <IconComponent {...sizing} {...additionalProps} /> : null;
}

const iconProps = {
  height: PropTypes.number,
  width: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  id: PropTypes.string
};

Icon.propTypes = {
  ...iconProps,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired
};

Icon.defaultProps = {
  color: 'currentColor',
  height: 24,
  width: 24
};

export default Icon;
export { iconProps };
