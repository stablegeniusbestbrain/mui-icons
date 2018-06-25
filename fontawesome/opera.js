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
      _react2.default.createElement('path', { d: 'M20 3.1q-2.2-1.5-4.8-1.5-2.1 0-3.9 1T8 5.2q-1 1.3-1.6 3t-.6 3.5v.6q.1 1.9.6 3.5t1.6 3q1.4 1.7 3.3 2.6t3.9 1q2.6 0 4.8-1.5-1.6 1.5-3.7 2.3T12 24h-.6q-2.3-.1-4.4-1.1t-3.7-2.6-2.4-3.8T0 12q0-2.4 1-4.7t2.5-3.8T7.3 1 12 0q2.3 0 4.3.8T20 3.1zm4 8.9q0 2.6-1 4.9t-2.9 3.9q-1.4.9-3 .9-1.8 0-3.4-1.2 2.1-.7 3.4-3.1t1.4-5.4q0-3-1.4-5.4t-3.4-3.1q1.6-1.2 3.4-1.2 1.6 0 3.1.9 1.8 1.7 2.8 4t1 4.8z' })
    )
  );
};

exports.default = Icon;