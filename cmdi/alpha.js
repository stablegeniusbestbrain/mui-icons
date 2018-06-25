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
      _react2.default.createElement('path', { d: 'M18.1 17.8c-.5.1-.9.2-1.3.2-1.1 0-2-.9-2.4-2.7-1 2-2.4 2.9-4.2 2.9-1.3 0-2.3-.5-3.1-1.5-.8-1-1.2-2.2-1.2-3.7 0-1.7.5-3.2 1.4-4.2.9-1.1 2.1-1.7 3.6-1.7.8 0 1.5.2 2.2.7.6.5 1.1 1.1 1.5 1.9l.7-2.4h2.6l-2.2 5.3c.3 1.3.5 2.1.8 2.6.2.4.6.7 1 .7.2 0 .4-.1.6-.1v2zm-4.3-5.2c-.2-1.2-.5-2-1-2.7-.4-.6-1-.9-1.6-.9-.8 0-1.5.4-2 1.1-.5.8-.7 1.7-.7 2.8 0 .9.2 1.8.6 2.4.4.7 1 1 1.7 1 .6 0 1.2-.3 1.7-.9.5-.5.9-1.3 1.2-2.4l.1-.4z' })
    )
  );
};

exports.default = Icon;