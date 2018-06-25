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
      _react2.default.createElement('path', { d: 'M16.5 1.5h-9l-6 6v9l6 6h9l6-6v-9l-6-6zM21 15.8L15.8 21H8.3L3 15.8V8.3L8.3 3h7.5L21 8.3v7.5zM10.5 6h3v7.5h-3V6zm0 9h3v3h-3v-3z' })
    )
  );
};

exports.default = Icon;