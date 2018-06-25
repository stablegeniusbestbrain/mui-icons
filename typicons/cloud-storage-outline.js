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
      _react2.default.createElement('path', { d: 'M16.5 9h-.4c-.8-2.4-3.3-4-5.8-4C6.9 5 4 7.7 4 11v.1c-1 .5-2.7 2-2.7 3.9 0 2.2 2 4 4.2 4h11c2.8 0 5-2.2 5-5s-2.2-5-5-5zm0 8H12v-3.8l2.1 2.2c.1.1.3.1.4.1s.3-.1.4-.1c.1-.2.1-.6 0-.8l-3-3-.2-.1h-.4l-.2.1-3 3c-.1.2-.1.6 0 .8.1.1.3.1.4.1s.3-.1.4-.1l2.1-2.2V17H5.5c-1.1 0-2-.9-2-2s.9-2 1.9-2h1.4l-.2-1.2c-.1-.3-.1-.5-.1-.8 0-2.2 1.8-4 4-4 1.9 0 3.6 1.4 3.9 3.3l.2 1.1 1.1-.3c.3-.1.6-.1.8-.1 1.7 0 3 1.3 3 3s-1.3 3-3 3z' })
    )
  );
};

exports.default = Icon;