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
      _react2.default.createElement('path', { d: 'M20.1 13.6c1.1.2 1.9 1.2 1.9 2.3 0 .9-.5 1.6-1.2 2l-.2.1H9.2c-1.5 0-2.7-1.2-2.7-2.6 0-1.5 1.2-2.7 2.7-2.7h.2v-.2c0-1.8 1.5-3.3 3.3-3.3 1.3 0 2.4.8 2.9 1.8.5-.3 1-.4 1.6-.4 1.6 0 2.9 1.2 2.9 2.8v.2zM8.8 12.2c-1.6.1-2.8 1.5-2.8 3.2 0 .6.2 1.3.5 1.8H4.7C3.2 17.2 2 16 2 14.4c0-1.4 1.1-2.6 2.5-2.7v-.6c0-1.7 1.3-3.1 3-3.1.7 0 1.3.2 1.8.5.7-1.4 2.1-2.3 3.8-2.3 2.2 0 4 1.6 4.2 3.8h-.1c-.5 0-.9.1-1.4.3-.7-1.1-1.8-1.7-3.1-1.7-2 0-3.7 1.6-3.9 3.6z' })
    )
  );
};

exports.default = Icon;