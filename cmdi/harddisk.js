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
      _react2.default.createElement('path', { d: 'M6 2h12c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm6 2c-3.3 0-6 2.7-6 6s2.7 6 6.1 6l-.9-2.2c-.3-.5-.1-1.1.4-1.4l.9-.5c.4-.3 1-.1 1.3.4l1.9 2.4c1.4-1.1 2.3-2.8 2.3-4.7 0-3.3-2.7-6-6-6zm0 5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-5 9c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm5.1-4.7l2.5 6.3 2.6-1.5-4.2-5.3-.9.5z' })
    )
  );
};

exports.default = Icon;