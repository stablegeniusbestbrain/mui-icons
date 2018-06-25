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
      _react2.default.createElement('path', { d: 'M20.2 3.8c-.4-.4-.9-.6-1.4-.6-.3 0-.5.1-.8.2-4.4 1.8-7.8 4.7-10.5 9.3-.1.2-.2.4-.2.6-1.4.2-2.6.9-3.5 2-.9 1.2-1.2 2.7-1 4.2L3 21l1.5.2c.3.1.6.1.9.1 2.7 0 4.9-1.9 5.3-4.6.2 0 .4-.1.6-.2 4.6-2.7 7.5-6.1 9.3-10.5.3-.8.1-1.6-.4-2.2zM5.4 19.3c-.2 0-.4 0-.6-.1-.3-2.1 1-3.8 3-4l1 1c-.2 1.8-1.6 3.1-3.4 3.1zm4.8-4.5l-1-1c.4-.7.8-1.3 1.2-1.8l1.6 1.6c-.5.4-1.1.8-1.8 1.2zm2.7-1.8L11 11.2c2.1-2.8 4.6-4.7 7.8-6-1.3 3.2-3.2 5.7-5.9 7.8z' })
    )
  );
};

exports.default = Icon;