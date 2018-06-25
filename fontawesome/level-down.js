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
      _react2.default.createElement('path', { d: 'M5.6 3.4H15q.2 0 .3.2t.1.3v11.5H18q.5 0 .8.5t-.1.9L14.4 22q-.3.3-.7.3t-.6-.3l-4.3-5.2q-.4-.4-.1-.9.2-.5.7-.5H12V6.9H7.7q-.2 0-.3-.2L5.2 4.1q-.1-.1 0-.4.1-.3.4-.3z' })
    )
  );
};

exports.default = Icon;