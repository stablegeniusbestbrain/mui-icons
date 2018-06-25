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
      _react2.default.createElement('path', { d: 'M21.3 4.7l-8.5 17.1q-.3.5-.8.5h-.2q-.3-.1-.5-.3t-.2-.6v-7.7H3.4q-.3 0-.5-.2t-.3-.4.1-.6.3-.4l17.2-8.6q.2-.1.4-.1.3 0 .6.3.2.2.2.4t-.1.6z' })
    )
  );
};

exports.default = Icon;