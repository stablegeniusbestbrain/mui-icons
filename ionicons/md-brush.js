'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M149.9 302.2c-39.1 0-70.7 31-70.7 69.3 0 30.3-27.3 46.2-47.2 46.2C53.7 446 90.7 464 126.3 464c52.1 0 94.3-41.4 94.3-92.4 0-38.4-31.6-69.4-70.7-69.4zM473.1 85.7l-31.6-31c-9.2-9-24-9-33.2 0L197 261.8l64.8 63.5 211.2-207c9.3-9 9.3-23.6.1-32.6z' })
      )
    )
  );
};

exports.default = Icon;