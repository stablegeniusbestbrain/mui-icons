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
      _react2.default.createElement('path', { d: 'M19 20H5c-1.7 0-3-1.3-3-3V9c0-1.7 1.3-3 3-3h1.6l1-1c.6-.6 1.6-1 2.4-1h4c.8 0 1.8.4 2.4 1l1 1H19c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3zM5 8c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-2c-.3 0-.5-.1-.7-.3L15 6.4c-.2-.2-.7-.4-1-.4h-4c-.3 0-.8.2-1 .4L7.7 7.7c-.2.2-.4.3-.7.3H5zm7 2c1.4 0 2.5 1.1 2.5 2.5S13.4 15 12 15s-2.5-1.1-2.5-2.5S10.6 10 12 10m0-1c-1.9 0-3.5 1.6-3.5 3.5S10.1 16 12 16s3.5-1.6 3.5-3.5S13.9 9 12 9zm6-.3c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3 1.3-.6 1.3-1.3-.6-1.3-1.3-1.3z' })
    )
  );
};

exports.default = Icon;