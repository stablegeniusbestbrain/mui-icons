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
      _react2.default.createElement('path', { d: 'M19.5 3.1L15 7.6V4h-2v7h7V9h-3.6l4.5-4.5-1.4-1.4zM4 13v2h3.6l-4.5 4.5 1.4 1.4L9 16.4V20h2v-7H4z' })
    )
  );
};

exports.default = Icon;