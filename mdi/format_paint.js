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
      _react2.default.createElement('path', { d: 'M18 4V3c0-.5-.4-1-1-1H5c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h12c.6 0 1-.5 1-1V6h1v4H9v11c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-9h8V4h-3z' })
    )
  );
};

exports.default = Icon;