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
        _react2.default.createElement('path', { d: 'M256.4 64L32.2 192 96 228.6v127.9L256 448l160-91.5V228.6l48-27.4V384h16V192L256.4 64zM248 425l-136-77.8V237.7l136 77.7V425zm152-77.8L264 425V315.4l136-77.7v109.5zM256 301L64.6 192l192-109.6L448.1 192 256 301z' })
      )
    )
  );
};

exports.default = Icon;