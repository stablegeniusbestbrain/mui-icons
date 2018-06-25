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
      _react2.default.createElement('path', { d: 'M11.2 2.3c.8 0 1.5.4 1.8 1.2l5 12c.1.2.1.5.1.8 0 .7-.5 1.4-1.2 1.8l-7.4 3c-.2.1-.5.2-.8.2-.7-.1-1.5-.5-1.8-1.3L2 8.1C1.5 7 2 5.9 3.1 5.5l7.3-3.1c.3-.1.5-.1.8-.1zm3.5 0h1.4c1.1 0 2 .9 2 2v6.3l-3.4-8.3zm5.4 1.5l1.4.6c1 .4 1.5 1.5 1.1 2.6l-2.5 5.8v-9zm-8.9.4L3.8 7.3l5 12 7.4-3.1-5-12zM8.7 8.5l3.2 2.5-.5 4-3.2-2.5.4-4z' })
    )
  );
};

exports.default = Icon;