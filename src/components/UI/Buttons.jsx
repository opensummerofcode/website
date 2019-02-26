import React from 'react';
import PropTypes from 'prop-types';

const buttonDefaulProps = {
  className: ''
};

const buttonType = {
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const ButtonGroup = ({ children }) => {
  return <div className="button-group">{children}</div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired
};

const Button = ({ className, children }) => {
  const classNames = ['button', className].join(' ');
  return <div className={classNames}>{children}</div>;
};

Button.defaultProps = buttonDefaulProps;

Button.propTypes = buttonType;

const SuccessButton = ({ className, children }) => {
  const classNames = ['success', className].join(' ');
  return <Button className={classNames}>{children}</Button>;
};

SuccessButton.defaultProps = buttonDefaulProps;

SuccessButton.propTypes = buttonType;

const SecondaryButton = ({ className, children }) => {
  const classNames = ['secondary', className].join(' ');
  return <Button className={classNames}>{children}</Button>;
};

SecondaryButton.defaultProps = buttonDefaulProps;

SecondaryButton.propTypes = buttonType;

export { Button, ButtonGroup, SuccessButton, SecondaryButton };
