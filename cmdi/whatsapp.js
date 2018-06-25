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
      _react2.default.createElement('path', { d: 'M16.7 14c.3.1.5.2.5.3.1.1.1.6-.2 1.1-.2.6-1.2 1.1-1.7 1.2-.5 0-.5.3-3-.8-2.4-1.1-3.9-3.7-4.1-3.9-.1-.2-.9-1.4-.9-2.6.1-1.2.7-1.8 1-2 .2-.3.5-.3.6-.3h.5c.2 0 .4-.1.6.5l.7 1.8v.5l-.3.4-.4.4c-.1.1-.3.2-.1.5.1.2.6 1.1 1.3 1.8.9.9 1.7 1.1 2 1.3.2.1.3.1.5-.1l.8-.9c.2-.3.4-.2.6-.1l1.6.9zM12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10c-2 0-3.8-.6-5.3-1.6L2 22l1.5-4.6C2.6 15.8 2 14 2 12 2 6.5 6.5 2 12 2zm0 2c-4.4 0-8 3.6-8 8 0 1.7.5 3.3 1.5 4.6l-1 2.9 2.9-1c1.3 1 2.9 1.5 4.6 1.5 4.4 0 8-3.6 8-8s-3.6-8-8-8z' })
    )
  );
};

exports.default = Icon;