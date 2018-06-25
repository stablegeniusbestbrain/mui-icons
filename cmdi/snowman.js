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
      _react2.default.createElement('path', { d: 'M17 17c0 2.8-2.2 5-5 5s-5-2.2-5-5c0-1.5.7-2.8 1.7-3.7-.4-.7-.7-1.5-.7-2.3v-.4L5 8.9l-.2-.2-2.5.7-.3-1 2.2-.6-1.9-1.1.5-.9L4.7 7l-.6-2.2 1-.3.7 2.5.2.1 2.7 1.6c.4-.5.9-1 1.5-1.3C9.5 6.9 9 6 9 5c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1-.5 1.9-1.2 2.4.6.3 1.1.8 1.5 1.3L18 7.1l.2-.1.7-2.5 1 .3-.6 2.2 1.9-1.2.5.9-1.9 1.1 2.2.6-.3 1-2.5-.7-.2.2-3 1.7v.4c0 .8-.3 1.6-.7 2.3 1 .9 1.7 2.2 1.7 3.7z' })
    )
  );
};

exports.default = Icon;