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
      _react2.default.createElement('path', { d: 'M7.8 19c-.8 0-1.5-.3-2.1-.9L.6 13l5.1-5.1c1.1-1.2 3.1-1.2 4.2 0 1.2 1.1 1.2 3.1 0 4.2l-.8.9.8.9c1.2 1.1 1.2 3.1 0 4.2-.5.6-1.3.9-2.1.9zm-4.4-6l3.7 3.7c.4.4 1.1.4 1.4 0 .4-.4.4-1 0-1.4L6.2 13l2.3-2.3c.4-.4.4-1 0-1.4-.3-.4-1-.4-1.4 0L3.4 13zm12.8 6c-.8 0-1.6-.3-2.1-.9-1.2-1.1-1.2-3.1 0-4.2l.8-.9-.8-.9c-1.2-1.1-1.2-3.1 0-4.2 1.1-1.2 3.1-1.2 4.2 0l5.1 5.1-5.1 5.1c-.6.6-1.3.9-2.1.9zm0-10c-.3 0-.5.1-.7.3-.4.4-.4 1 0 1.4l2.3 2.3-2.3 2.3c-.4.4-.4 1 0 1.4.3.4 1 .4 1.4 0l3.7-3.7-3.7-3.7c-.2-.2-.5-.3-.7-.3z' })
    )
  );
};

exports.default = Icon;