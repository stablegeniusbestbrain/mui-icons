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
      _react2.default.createElement('path', { d: 'M17.5 6.1c-.8-.9-2-1.1-3-.8V5c0-1.7-1.3-3-3-3s-3 1.3-3 3v.3c-1-.3-2.2-.1-3 .8C3.9 7.7 3 9.8 3 12.1s.9 4.4 2.5 6c1.6 1.6 3.7 2.5 6 2.5s4.4-.9 6-2.5c1.6-1.6 2.5-3.8 2.5-6s-.9-4.4-2.5-6zm-7-1.1c0-.6.4-1 1-1s1 .4 1 1v5c0 .6-.4 1-1 1s-1-.4-1-1V5zm-1 3.8V10c0 1.1.9 2 2 2s2-.9 2-2V8.8c.1.3.2.6.5.8.6.7 1 1.5 1 2.5s-.4 1.8-1 2.4c-1.3 1.4-3.7 1.4-5 0-.6-.6-1-1.5-1-2.4s.4-1.8 1-2.5c.3-.2.4-.5.5-.8zm6.6 7.9c-1.2 1.2-2.9 1.9-4.6 1.9s-3.4-.7-4.6-1.9C5.7 15.4 5 13.8 5 12.1s.7-3.4 1.9-4.6c.4-.4 1-.4 1.4 0s.4 1 0 1.4c-.8.8-1.3 2-1.3 3.2s.5 2.3 1.3 3.2c.9.8 2 1.3 3.2 1.3s2.3-.5 3.2-1.3c.8-.9 1.3-2 1.3-3.2s-.5-2.4-1.3-3.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0c1.2 1.2 1.9 2.8 1.9 4.6s-.7 3.3-1.9 4.6z' })
    )
  );
};

exports.default = Icon;