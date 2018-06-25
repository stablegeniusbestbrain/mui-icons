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
      _react2.default.createElement('path', { d: 'M5 9v12H1V9h4zm4 12c-1.1 0-2-.9-2-2V9c0-.6.2-1.1.6-1.4L14.2 1l1 1.1c.3.2.5.6.5 1l-.1.3-.9 4.6H21c1.1 0 2 .9 2 2v2c0 .3-.1.5-.1.7l-3.1 7.1c-.3.7-1 1.2-1.8 1.2H9zm0-2h9l3-7v-2h-8.8l1.1-5.3L9 9v10z' })
    )
  );
};

exports.default = Icon;