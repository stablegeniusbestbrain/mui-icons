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
      _react2.default.createElement('path', { d: 'M12 10.3q3.2 0 5.9-.6T22.3 8v2.3q0 .9-1.4 1.7t-3.7 1.3-5.2.4-5.2-.4T3.1 12t-1.4-1.7V8q1.6 1.1 4.4 1.7t5.9.6zm0 10.3q3.2 0 5.9-.6t4.4-1.7v2.3q0 .9-1.4 1.7t-3.7 1.2-5.2.5-5.2-.5-3.7-1.2-1.4-1.7v-2.3q1.6 1.1 4.4 1.7t5.9.6zm0-5.2q3.2 0 5.9-.5t4.4-1.7v2.2q0 1-1.4 1.7t-3.7 1.3-5.2.5-5.2-.5-3.7-1.3-1.4-1.7v-2.2q1.6 1.1 4.4 1.7t5.9.5zM12 0q2.8 0 5.2.5t3.7 1.2 1.4 1.7v1.7q0 1-1.4 1.8t-3.7 1.2-5.2.5-5.2-.5-3.7-1.2-1.4-1.8V3.4q0-.9 1.4-1.7T6.8.5 12 0z' })
    )
  );
};

exports.default = Icon;