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
      _react2.default.createElement('path', { d: 'M19.4 16.8L16.8 7H18c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1h1.1c0 .2 0 .4-.1.7l-2.4 9.1c-.3.8-.1 1.6.3 2.2.5.7 1.3 1 2.1 1h10c.8 0 1.6-.3 2.1-1 .4-.6.6-1.4.3-2.2zM14.7 7l1.4 5H7.9l1-3.8c.1-.3.2-.8.2-1.2h5.6zm2.8 10.8c-.1.1-.3.2-.5.2H7c-.2 0-.4-.1-.5-.2-.1-.1-.1-.3 0-.5l1.2-4.4c.1.1.2.1.3.1h8c.1 0 .2-.1.3-.1l1.2 4.4c.1.2.1.4 0 .5z' })
    )
  );
};

exports.default = Icon;