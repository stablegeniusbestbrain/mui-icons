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
      _react2.default.createElement('path', { d: 'M4.9 11.1c.3 0 .6.1.9.1 0-2.1 1.7-3.8 3.8-3.8 1.7 0 3.1 1 3.6 2.4.6-.8 1.5-1.3 2.6-1.3 1.7 0 3.1 1.5 3.1 3.2v.7c.2-.1.5-.1.7-.1 1.3 0 2.4 1 2.4 2.3 0 1.3-1.1 2.4-2.4 2.4H4.9C3.3 17 2 15.7 2 14.1c0-1.7 1.3-3 2.9-3z' })
    )
  );
};

exports.default = Icon;