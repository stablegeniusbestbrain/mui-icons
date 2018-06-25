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
      _react2.default.createElement('path', { d: 'M17.1 5.8c-.4 0-.9.2-1.3.5l-2.7 1.8c-.7.5-2.2.9-3.1.9-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3 .9 0 2.4.4 3.1.9l2.7 1.8c.4.3.9.5 1.3.5.9 0 1.9-.7 1.9-2.2V8c0-1.5-1-2.2-1.9-2.2zM14 16.1c-1.1-.6-2.8-1.1-4-1.1-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1 1.2 0 2.9-.5 4-1.1v6.2zm3 1.9v.1h-.1L15 16.8V9.2l1.9-1.3h.1V18z' })
    )
  );
};

exports.default = Icon;