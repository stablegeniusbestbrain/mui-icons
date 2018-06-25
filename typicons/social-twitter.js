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
      _react2.default.createElement('path', { d: 'M18.9 7c.8-.5 1.3-1.2 1.6-2-.8.4-1.6.7-2.4.8-.7-.7-1.5-1.1-2.6-1.1s-1.9.4-2.7 1.1c-.7.7-1 1.6-1 2.6 0 .3 0 .6.1.8-3.1-.1-5.6-1.4-7.6-3.8-.4.6-.6 1.2-.6 1.8 0 1.3.6 2.3 1.7 3.1-.6-.1-1.2-.2-1.7-.5 0 1 .3 1.7.9 2.4.5.7 1.2 1.1 2.1 1.3-.3.1-.7.1-1 .1-.3 0-.5 0-.7-.1.3.8.7 1.4 1.3 1.9.7.5 1.4.7 2.2.7-1.4 1.1-2.9 1.6-4.6 1.6-.4 0-.7 0-.9-.1 1.7 1.2 3.6 1.7 5.7 1.7s4-.5 5.6-1.6c1.7-1.1 2.9-2.4 3.7-4 .8-1.6 1.2-3.2 1.2-4.9v-.5c.7-.5 1.3-1.2 1.8-1.9-.7.3-1.4.5-2.1.6z' })
    )
  );
};

exports.default = Icon;