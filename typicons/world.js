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
      _react2.default.createElement('path', { d: 'M12 2c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm2 2c0 1-.5 2-1.5 2S11 7 11 8v3s1 0 1-3c0-.6.4-1 1-1s1 .4 1 1v3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1h1v-2l1 1-1 1c0 3 0 3-2 4 0-1-1-1-3-1v-2l-2-2V9c-1 0-1 1-1 1l-.6-.6L5 7c.2-.1.3-.3.4-.5l.5-.7C7.4 4.1 9.6 3 12 3c.7 0 1.4.1 2 .3V4z' })
    )
  );
};

exports.default = Icon;