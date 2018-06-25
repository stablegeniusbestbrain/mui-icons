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
      _react2.default.createElement('path', { d: 'M18 13.5v-3h-6v-3h6v-3L24 9l-6 4.5zM15 18H9V4.5l-6-3h12V6h1.5V1.5C16.5.7 15.8 0 15 0H1.5C.7 0 0 .7 0 1.5v17.1c0 .6.3 1.1.8 1.3L9 24v-4.5h6c.8 0 1.5-.7 1.5-1.5v-6H15v6z' })
    )
  );
};

exports.default = Icon;