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
      _react2.default.createElement('path', { d: 'M19 2l-5 4.5v11l5-4.5V2zM6.5 5c-2 0-4 .4-5.5 1.5v14.7c0 .2.3.5.5.5.1 0 .1-.1.3-.1 1.3-.7 3.2-1.1 4.7-1.1 1.9 0 4.1.4 5.5 1.5 1.3-.9 3.8-1.5 5.5-1.5 1.6 0 3.4.3 4.8 1.1h.2c.3 0 .5-.3.5-.5V6.5c-.6-.5-1.2-.7-2-1V19c-1.1-.4-2.3-.5-3.5-.5-1.7 0-4.2.6-5.5 1.5V6.5C10.6 5.4 8.4 5 6.5 5z' })
    )
  );
};

exports.default = Icon;