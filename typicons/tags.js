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
      _react2.default.createElement('path', { d: 'M21.4 9.6L15 3.1C13.6 1.7 11.9 1 10 1s-3.6.7-5 2C3.6 4.5 2.9 6.4 3 8.4c-.6 1-1 2.3-1 3.6 0 1.9.7 3.6 2 4.9l3.1 3 3.5 3.5c.4.4.9.6 1.4.6s1-.2 1.4-.6l7-7c.8-.8.8-2 0-2.8l-.1-.1 1.1-1.1c.8-.8.8-2 0-2.8zM12 22l-3.5-3.5-3-3c-2-1.9-2-5.1 0-7C6.4 7.5 7.7 7 9 7s2.6.5 3.5 1.5L19 15l-7 7zm2-14.9C12.6 5.7 10.9 5 9 5c-1.3 0-2.5.3-3.6 1 .3-.6.6-1.1 1.1-1.5C7.4 3.5 8.7 3 10 3s2.6.5 3.5 1.5L20 11l-1.1 1.1-4.9-5zm-5 3.4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5m0-1c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5S10.4 9.5 9 9.5z' })
    )
  );
};

exports.default = Icon;