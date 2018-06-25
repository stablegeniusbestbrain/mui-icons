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
      _react2.default.createElement('path', { d: 'M20.7 3.3c-1.1-1.2-2.5-1.8-4.2-1.8-1.7 0-3.1.6-4.2 1.8s-1.7 2.5-1.8 4.2c0 .5.1.9.2 1.3L1.5 18v1.5L3 21h3l1.5-1.5V18H9v-1.5h1.5V15h3l1.6-1.7c.5.2.9.2 1.4.2 1.7 0 3.1-.6 4.2-1.8s1.8-2.5 1.8-4.2c0-1.7-.6-3.1-1.8-4.2zM18 8.1c-1.2 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1 1.2 0 2.1.9 2.1 2.1 0 1.2-.9 2.1-2.1 2.1z' })
    )
  );
};

exports.default = Icon;