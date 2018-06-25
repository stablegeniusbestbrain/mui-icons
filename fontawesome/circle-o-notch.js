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
      _react2.default.createElement('path', { d: 'M23.6 12q0 2.4-.9 4.5t-2.5 3.7-3.7 2.5-4.5.9-4.5-.9-3.7-2.5-2.5-3.7T.4 12q0-2.9 1.3-5.3t3.6-4.1 5-2.1v3.1q-3 .6-4.9 3t-2 5.4q0 1.7.7 3.3t1.8 2.8 2.8 1.8 3.3.7 3.3-.7 2.8-1.8 1.8-2.8.7-3.3q0-3.1-2-5.4t-4.9-3V.5q2.8.5 5 2.1t3.6 4.1 1.3 5.3z' })
    )
  );
};

exports.default = Icon;