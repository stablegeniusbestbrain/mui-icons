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
      _react2.default.createElement('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h7V6H4zm16 12V6h-1.2c.2.5.2 1.1.1 1.1 0 .7-.5 1.4-.7 1.7l-2.3 2.5h3.3v1.2H14v-1s3.1-3.3 3.2-3.5c.1-.3.7-2-.7-2-1.2 0-1.1 1.3-1.1 1.3h-1.5s0-.7.3-1.3H13v12h2.6v-.9h.9s.9-.1 1-1c0-1-.9-1-1-1-.1 0-1.1 0-1.1.9h-1.5s0-2.1 2.6-2.1 2.5 2 2.5 2 0 1.3-1.1 1.7l.5.4H20zM8.9 16H7.4v-5.8l-1.8.6V9.5l3.2-1.1h.1V16z' })
    )
  );
};

exports.default = Icon;