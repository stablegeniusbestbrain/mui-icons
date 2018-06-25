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
      _react2.default.createElement('path', { d: 'M22.8 3.1L15 8.6V4.5c0-.8-.7-1.5-1.5-1.5h-12C.7 3 0 3.7 0 4.5V18c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5v-4.1l7.8 5.5c.5.3 1.2 0 1.2-.6v-15c0-.7-.7-1-1.2-.7z' })
    )
  );
};

exports.default = Icon;