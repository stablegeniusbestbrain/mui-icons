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
      _react2.default.createElement('path', { d: 'M5 4c-1.1 0-2 .9-2 2v10.3l8.2-8.2c-.1-.5-.2-1-.2-1.6 0-.9.2-1.7.6-2.5H5zm13 17c1.1 0 2-.9 2-2v-7.1c-.8 1.1-1.7 2.3-2.7 3.6l-.8 1-.8-1c-1.3-1.7-2.5-3.2-3.3-4.6-.3-.6-.6-1.1-.9-1.7l-4 4.1 7.7 7.7H18zM3 19c0 1.1.9 2 2 2h8.8l-7-7L3 17.7V19zm13.5-4c2.6-3.4 4.5-5.9 4.5-8.4S19 2 16.5 2 12 4 12 6.6c0 2.5 1.9 5 4.5 8.4zm2-8.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z' })
    )
  );
};

exports.default = Icon;