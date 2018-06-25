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
      _react2.default.createElement('path', { d: 'M21.7 13.3l-1 1-2.1-2 1-1c.3-.2.6-.2.8 0l1.3 1.3c.2.2.2.5 0 .7zM12 18.9l6.1-6 2 2-6 6.1H12v-2.1zm0-4.9c-4.4 0-8 1.8-8 4v2h6v-1.9l4-4c-.7-.1-1.3-.1-2-.1zm0-10C9.8 4 8 5.8 8 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z' })
    )
  );
};

exports.default = Icon;