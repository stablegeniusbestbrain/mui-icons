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
      _react2.default.createElement('path', { d: 'M7.5 7.5c1.7-1.6 3.8-2.8 5.9-3.3 2.1-.5 4.1-.4 5.2-.2 1.1.1 1.3.3 1.4 1.4.2 1.1.3 3.1-.2 5.2s-1.7 4.2-3.3 5.9c-1.7 1.6-3.8 2.8-5.9 3.3-2 .5-4.1.4-5.2.2-1.1-.1-1.2-.3-1.4-1.4-.2-1.1-.3-3.1.2-5.2s1.7-4.2 3.3-5.9zm-.2 8.3l.9.9 1.2-1.2 1.2 1.2.9-.9-1.2-1.2 1.7-1.7 1.2 1.2.9-.9-1.2-1.2 1.7-1.7 1.2 1.2.9-.9-1.2-1.2 1.2-1.2-.9-.9-1.2 1.2-1.2-1.2-.9.9 1.2 1.2-1.7 1.7-1.2-1.2-.9.9 1.2 1.2-1.7 1.7-1.2-1.2-.9.9 1.2 1.2-1.2 1.2z' })
    )
  );
};

exports.default = Icon;