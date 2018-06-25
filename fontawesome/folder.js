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
      _react2.default.createElement('path', { d: 'M23.1 8.1v9.5q0 1.2-.8 2.1t-2.2.9H3.9q-1.3 0-2.2-.9t-.8-2.1V4.7q0-1.2.8-2.1t2.2-.9h4.2q1.3 0 2.2.9t.8 2.1v.4h9q1.3 0 2.2.9t.8 2.1z' })
    )
  );
};

exports.default = Icon;