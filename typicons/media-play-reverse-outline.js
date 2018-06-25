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
      _react2.default.createElement('path', { d: 'M14 7v10l-5.1-5L14 7m-1.4-1.4C10 8.1 6 12 6 12s4 3.9 6.6 6.4c.4.4.9.6 1.4.6 1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2-.5 0-1 .2-1.4.6z' })
    )
  );
};

exports.default = Icon;