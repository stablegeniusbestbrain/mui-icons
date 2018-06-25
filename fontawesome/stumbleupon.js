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
      _react2.default.createElement('path', { d: 'M13.4 9.5V8q0-.6-.4-1t-1-.4-1 .4-.4 1v8.2q0 2.3-1.7 4t-4 1.6q-2.4 0-4.1-1.7t-1.7-4v-3.6h4.4V16q0 .6.4 1t1 .4 1-.4.4-1V7.7q0-2.3 1.7-3.9t4-1.6q2.4 0 4 1.6t1.7 4v1.8l-2.6.8zm7.1 3h4.4v3.6q0 2.4-1.7 4t-4.1 1.7q-2.4 0-4-1.7t-1.7-4v-3.6l1.7.9 2.6-.8v3.6q0 .6.4.9t1 .4 1-.4.4-.9v-3.7z' })
    )
  );
};

exports.default = Icon;