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
      _react2.default.createElement('path', { d: 'M17 8.5l-4.7 3.8L17 16V8.5zM4.7 18.4L2 16.7v-9l3-1L9.3 10 18 2l4 2.5V20l-5 2-7.7-7.3-4.6 3.7zM5 14l1.9-1.7L5 10.5V14z' })
    )
  );
};

exports.default = Icon;