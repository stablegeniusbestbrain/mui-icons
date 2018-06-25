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
      _react2.default.createElement('path', { d: 'M8 3H6c-.8 0-1.6.3-2.1.9C3.3 4.4 3 5.2 3 6v2c0 .8.3 1.6.9 2.1.5.6 1.3.9 2.1.9h2c.8 0 1.6-.3 2.1-.9.6-.5.9-1.3.9-2.1V6c0-.8-.3-1.6-.9-2.1C9.6 3.3 8.8 3 8 3zm10 0h-2c-.8 0-1.6.3-2.1.9-.6.5-.9 1.3-.9 2.1v2c0 .8.3 1.6.9 2.1.5.6 1.3.9 2.1.9h2c.8 0 1.6-.3 2.1-.9.6-.5.9-1.3.9-2.1V6c0-.8-.3-1.6-.9-2.1-.5-.6-1.3-.9-2.1-.9zM8 13H6c-.8 0-1.6.3-2.1.9-.6.5-.9 1.3-.9 2.1v2c0 .8.3 1.6.9 2.1.5.6 1.3.9 2.1.9h2c.8 0 1.6-.3 2.1-.9.6-.5.9-1.3.9-2.1v-2c0-.8-.3-1.6-.9-2.1-.5-.6-1.3-.9-2.1-.9zm10 0h-2c-.8 0-1.6.3-2.1.9-.6.5-.9 1.3-.9 2.1v2c0 .8.3 1.6.9 2.1.5.6 1.3.9 2.1.9h2c.8 0 1.6-.3 2.1-.9.6-.5.9-1.3.9-2.1v-2c0-.8-.3-1.6-.9-2.1-.5-.6-1.3-.9-2.1-.9z' })
    )
  );
};

exports.default = Icon;