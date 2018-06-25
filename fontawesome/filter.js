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
      _react2.default.createElement('path', { d: 'M21.4 4q.2.5-.2.9l-6.6 6.6v9.9q0 .6-.6.8-.1.1-.3.1-.3 0-.6-.3l-3.4-3.4q-.3-.3-.3-.6v-6.5L2.8 4.9q-.4-.4-.2-.9.3-.6.8-.6h17.2q.5 0 .8.6z' })
    )
  );
};

exports.default = Icon;