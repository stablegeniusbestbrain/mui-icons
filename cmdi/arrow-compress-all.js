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
      _react2.default.createElement('path', { d: 'M19.5 3.1l1.4 1.4L16.4 9H20v2h-7V4h2v3.6l4.5-4.5zm1.4 16.4l-1.4 1.4-4.5-4.5V20h-2v-7h7v2h-3.6l4.5 4.5zM4.5 3.1L9 7.6V4h2v7H4V9h3.6L3.1 4.5l1.4-1.4zM3.1 19.5L7.6 15H4v-2h7v7H9v-3.6l-4.5 4.5-1.4-1.4z' })
    )
  );
};

exports.default = Icon;