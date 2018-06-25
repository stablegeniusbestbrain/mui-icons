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
      _react2.default.createElement('path', { d: 'M23.4 10.4l-2.2 10.2h-4.5l2.4-11.2q.2-.7-.2-1.2-.4-.4-1.1-.4h-2.3l-2.7 12.8H8.3L11 7.8H7.2L4.5 20.6H0L2.7 7.8l-2-4.4h17.1q1.3 0 2.5.6t2 1.5q.8 1 1.1 2.2t0 2.7z' })
    )
  );
};

exports.default = Icon;