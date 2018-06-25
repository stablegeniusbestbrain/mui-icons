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
      _react2.default.createElement('path', { d: 'M3 4h2v6h4V4h2v14H9v-6H5v6H3V4zm18 14h-6c-1.1 0-2-.9-2-2 0-.5.2-1 .5-1.4l4.9-5.2c.4-.3.6-.8.6-1.4 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.1-.4 2.1-1.2 2.8L15 16h6v2z' })
    )
  );
};

exports.default = Icon;