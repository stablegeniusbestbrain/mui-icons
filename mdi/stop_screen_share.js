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
      _react2.default.createElement('path', { d: 'M21.2 18l2 2h.8v-2h-2.8zm.8-2V6c0-1.1-.9-2-2-2H7.2l5.2 5.3c.2-.1.4-.1.6-.1V7l4 3.8-1.6 1.4 5.6 5.6c.6-.4 1-1 1-1.8zM2.4 1.7L1.1 3l1.6 1.5c-.4.4-.7.9-.7 1.5v10c0 1.1.9 2 2 2H0v2h18.1l2.7 2.7 1.3-1.2L2.4 1.7zM7 15c.3-1.5.9-2.9 2.1-4l1.6 1.6C9.1 12.9 8 13.7 7 15z' })
    )
  );
};

exports.default = Icon;