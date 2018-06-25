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
      _react2.default.createElement('path', { d: 'M7.7 10l8 8H6c-2.2 0-4-1.8-4-4s1.8-4 4-4M3 5.3L5.8 8C2.6 8.2 0 10.8 0 14c0 3.3 2.7 6 6 6h11.7l2 2 1.3-1.3L4.3 4m15.1 6c-.7-3.4-3.8-6-7.4-6-1.5 0-2.9.4-4 1.2l1.5 1.4c.7-.4 1.6-.6 2.5-.6 3 0 5.5 2.5 5.5 5.5v.5H19c1.7 0 3 1.3 3 3 0 1.1-.6 2.1-1.6 2.6l1.5 1.5c1.3-.9 2.1-2.4 2.1-4.1 0-2.6-2.1-4.8-4.6-5z' })
    )
  );
};

exports.default = Icon;