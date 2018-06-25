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
      _react2.default.createElement('path', { d: 'M10.2 9.1l3.3-4.7c.6-.9 1.4-1.4 2.4-1.4.8 0 1.5.3 2.1.9.6.5.9 1.2.9 2 0 .6-.2 1.1-.5 1.6l-2.9 4.3 3.6 4.6c.4.5.5 1 .5 1.6 0 .8-.2 1.5-.8 2.1-.6.6-1.3.9-2.1.9-.9 0-1.6-.3-2-.9l-4.5-5.5v3c0 .9-.1 1.6-.4 2.1-.6.9-1.4 1.3-2.5 1.3-.9 0-1.7-.3-2.2-1-.5-.6-.7-1.4-.7-2.4V6.3c0-1 .2-1.7.7-2.3.5-.7 1.3-1 2.2-1 .9 0 1.6.3 2.2 1 .3.3.5.7.6 1 .1.3.1.7.1 1.3v2.8z' })
    )
  );
};

exports.default = Icon;