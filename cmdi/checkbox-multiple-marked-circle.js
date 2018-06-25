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
      _react2.default.createElement('path', { d: 'M14 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM4.9 5.8A8.14 8.14 0 0 0 2 12c0 4.4 3.6 8 8 8 .6 0 1.3-.1 1.9-.2-1.8-.4-3.4-1.3-4.7-2.5C5.2 16.2 4 14.2 4 12c0-.3 0-.6.1-.9-.1-.4-.1-.7-.1-1.1 0-1.4.3-2.9.9-4.2zm13.2.3l1.4 1.4L13 14l-3.8-3.8 1.4-1.4 2.4 2.4' })
    )
  );
};

exports.default = Icon;