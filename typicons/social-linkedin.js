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
      _react2.default.createElement('path', { d: 'M8 19H5V9h3v10zm11 0h-3v-5.3c0-1.4-.5-2.1-1.5-2.1-.8 0-1.3.4-1.5 1.1V19h-3V9h2.4l.2 2c.6-1 1.6-1.7 3-1.7 1 0 1.8.3 2.4 1 .7.7 1 1.7 1 3.1V19z' }),
      _react2.default.createElement('ellipse', { cx: '6.5', cy: '6.5', rx: '1.55', ry: '1.5' })
    )
  );
};

exports.default = Icon;