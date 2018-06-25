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
      _react2.default.createElement('path', { d: 'M19 11c0 1.2-.3 2.3-.9 3.3L16.9 13c.2-.6.4-1.3.4-2H19zm-4 .2l-6-6V5c0-1.7 1.3-3 3-3s3 1.3 3 3v6.2zM4.3 3L21 19.7 19.7 21l-4.2-4.2c-.7.5-1.6.8-2.5.9V21h-2v-3.3c-3.3-.5-6-3.3-6-6.7h1.7c0 3 2.5 5.1 5.3 5.1.8 0 1.6-.2 2.3-.5l-1.6-1.7-.7.1c-1.7 0-3-1.3-3-3v-.7l-6-6L4.3 3z' })
    )
  );
};

exports.default = Icon;