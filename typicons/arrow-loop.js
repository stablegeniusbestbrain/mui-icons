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
      _react2.default.createElement('path', { d: 'M16.5 8h-2.1l1.3-1.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L10.6 9l3.7 3.7c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L14.4 10h2.1c1.4 0 2.5 1.3 2.5 3s-1.3 3-3 3H8c-1.7 0-3-1.3-3-3s1.3-3 3-3c.6 0 1-.4 1-1s-.4-1-1-1c-2.8 0-5 2.2-5 5s2.2 5 5 5h8c2.8 0 5-2.2 5-5s-2-5-4.5-5z' })
    )
  );
};

exports.default = Icon;