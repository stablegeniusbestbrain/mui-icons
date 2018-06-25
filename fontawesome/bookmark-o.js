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
      _react2.default.createElement('path', { d: 'M18.9 3.4H5.1v16.7l5.7-5.5 1.2-1.1 1.2 1.1 5.7 5.5V3.4zm.1-1.7q.3 0 .6.1.4.2.7.6t.3.8v17.3q0 .4-.3.8t-.7.6q-.2.1-.6.1-.6 0-1.1-.5L12 15.9l-5.9 5.6q-.5.5-1.1.5-.3 0-.6-.1-.4-.2-.7-.6t-.3-.8V3.2q0-.4.3-.8t.7-.6q.3-.1.6-.1h14z' })
    )
  );
};

exports.default = Icon;