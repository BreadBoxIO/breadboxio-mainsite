import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export class BlockButton extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    className: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    color: '',
    disabled: false,
    onClick: undefined,
  };

  renderClassNames() {
    const { color, className } = this.props;

    const result = classNames('block-button', className, {
      [`block-button--${color}`]: color,
    });

    return result;
  }

  render() {
    const { children, disabled, onClick } = this.props;

    if (!children) return null;

    const className = this.renderClassNames();

    return (
      <button onClick={onClick} disabled={disabled} className={className} type="button">
        {children}
      </button>
    );
  }
}
