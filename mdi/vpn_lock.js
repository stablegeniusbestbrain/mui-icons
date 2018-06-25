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
      _react2.default.createElement('path', { d: 'M22 4v-.5C22 2.1 20.9 1 19.5 1S17 2.1 17 3.5V4c-.6 0-1 .5-1 1v4c0 .6.4 1 1 1h5c.6 0 1-.4 1-1V5c0-.5-.4-1-1-1zm-.8 0h-3.4v-.5c0-.9.8-1.7 1.7-1.7s1.7.8 1.7 1.7V4zm-2.3 8c.1.3.1.7.1 1 0 2.1-.8 4-2.1 5.4-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.5-1-1-1H7v-2h2c.6 0 1-.4 1-1V8h2c1.1 0 2-.9 2-2V3.5c-.9-.3-1.9-.5-3-.5C5.5 3 1 7.5 1 13s4.5 10 10 10 10-4.5 10-10c0-.3 0-.7-.1-1h-2zM10 20.9c-4-.5-7-3.8-7-7.9 0-.6.1-1.2.2-1.8L8 16v1c0 1.1.9 2 2 2v1.9z' })
    )
  );
};

exports.default = Icon;