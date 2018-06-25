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
      _react2.default.createElement('path', { d: 'M20.3 11.2l.3 4.2q0 1-1.1 1.7t-3.2 1.3-4.3.5-4.3-.5-3.2-1.3-1.1-1.7l.3-4.2 7.7 2.4q.3.1.6.1t.6-.1zm7.1-4.3q0 .3-.3.4l-15 4.7h-.2L3.1 9.2q-.5.5-.9 1.5t-.5 2.4q.9.5.9 1.5 0 .9-.8 1.4l.8 5.8q0 .2-.1.3-.2.2-.4.2H-.4q-.2 0-.4-.2-.1-.1-.1-.3l.8-5.8q-.8-.5-.8-1.4 0-1 .9-1.5.2-2.8 1.3-4.4l-4.4-1.4q-.3-.1-.3-.4t.3-.5l15-4.7h.2l15 4.7q.3.1.3.5z' })
    )
  );
};

exports.default = Icon;