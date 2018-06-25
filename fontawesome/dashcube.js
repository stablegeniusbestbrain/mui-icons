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
      _react2.default.createElement('path', { d: 'M1.7 9.1q0-1.7 1.2-3t3-1.3h10L20.6 0v19.7q0 1.8-1.3 3T16.4 24H5.9q-1.7 0-3-1.3t-1.2-3V9.1zm16.5 10.1l-2.3-2.4v-5.7q0-.6-.5-1.1t-1-.4H7.9q-.6 0-1 .4t-.5 1.1v6.6q0 .6.5 1.1t1 .4h10.3z' })
    )
  );
};

exports.default = Icon;