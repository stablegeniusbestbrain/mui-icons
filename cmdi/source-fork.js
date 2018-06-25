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
      _react2.default.createElement('path', { d: 'M6 2c1.7 0 3 1.3 3 3 0 1.3-.8 2.4-1.9 2.8 0 .5.3 1 .9 1.8 1 1.3 3 3.2 4 4.6 1-1.4 3-3.3 4-4.6.6-.8.9-1.3.9-1.8C15.8 7.4 15 6.3 15 5c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.3-.9 2.4-2 2.8-.1.6-.4 1.2-1 2-1 1.4-3 3.3-4 4.6-.6.8-.8 1.3-.9 1.8 1.1.4 1.9 1.5 1.9 2.8 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-1.3.8-2.4 1.9-2.8 0-.5-.3-1-.9-1.8-1-1.3-3-3.2-4-4.6-.6-.8-.9-1.4-1-2C3.9 7.4 3 6.3 3 5c0-1.7 1.3-3 3-3zm0 2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm12 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm-6 14c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;