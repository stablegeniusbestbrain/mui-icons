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
      _react2.default.createElement('path', { d: 'M2 5.3L3.3 4 20 20.7 18.7 22 9 12.3v5.2C9 19.4 7.4 21 5.5 21S2 19.4 2 17.5 3.6 14 5.5 14c.5 0 1 .1 1.5.3v-4l-5-5zM21 3v12.5c0 1-.4 1.9-1.1 2.6l-5-5c.7-.7 1.6-1.1 2.6-1.1.5 0 1 .1 1.5.3V6.5l-8.8 1.8-2.5-2.5L21 3z' })
    )
  );
};

exports.default = Icon;