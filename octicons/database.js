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
      _react2.default.createElement('path', { d: 'M12 22.5c-5 0-9-1.4-9-3v-3c0-.3.1-.5.3-.7C4.3 17 7.8 18 12 18s7.7-1 8.7-2.2c.2.2.3.4.3.7v3c0 1.6-4 3-9 3zm0-6c-5 0-9-1.3-9-3v-3c0-.2.1-.3.1-.5.1-.1.1-.2.2-.2C4.3 11 7.8 12 12 12s7.7-1 8.7-2.2c.1 0 .1.1.2.2 0 .2.1.3.1.5v3c0 1.7-4 3-9 3zm0-6c-5 0-9-1.3-9-3v-3c0-1.7 4-3 9-3s9 1.4 9 3v3c0 1.7-4 3-9 3zM12 3c-3.3 0-6 .7-6 1.5S8.7 6 12 6s6-.7 6-1.5S15.3 3 12 3z' })
    )
  );
};

exports.default = Icon;