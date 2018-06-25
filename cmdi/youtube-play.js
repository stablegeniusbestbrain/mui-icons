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
      _react2.default.createElement('path', { d: 'M10 16.5v-9l6 4.5m4-7.6c-.6-.2-4.3-.4-8-.4s-7.4.2-8 .4c-1.6.5-2 4-2 7.6s.4 7.1 2 7.6c.6.2 4.3.4 8 .4s7.4-.2 8-.4c1.6-.5 2-4 2-7.6s-.4-7.1-2-7.6z' })
    )
  );
};

exports.default = Icon;