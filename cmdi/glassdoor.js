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
      _react2.default.createElement('path', { d: 'M18 6h-2v9c0 1-.2 1.6-1 1.9L9.5 19V6c0-.7.2-1.9 1.5-1.8l7 .8V3.8L9 2.1C8.6 2 8.4 2 8 2c-1.3 0-2 .8-2 2v16.4c0 1.5 1.4 1.9 2 1.6l9-3.7c1-.4 1-1.3 1-2.3V6z' })
    )
  );
};

exports.default = Icon;