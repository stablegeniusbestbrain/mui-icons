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
      _react2.default.createElement('path', { d: 'M21.2 7.8q0 1.3-1 2.3t-2.3 1-2.3-1-.9-2.3.9-2.3 2.3-1 2.3 1 1 2.3zm-10.3 9.9q0-1.4-1-2.3t-2.4-1q-.3 0-.7.1l1.4.5q1 .4 1.5 1.5t0 2q-.4 1-1.4 1.4t-2.1.1q-.3-.2-.8-.4t-.8-.3q.4.8 1.2 1.3t1.7.5q1.4 0 2.4-1t1-2.4zM22 7.8q0-1.7-1.2-2.9t-2.9-1.2q-1.7 0-2.9 1.2t-1.2 2.9q0 1.7 1.2 2.9t2.9 1.2q1.7 0 2.9-1.2T22 7.8zm2 0q0 2.5-1.8 4.3t-4.3 1.8l-5.8 4.3q-.2 1.7-1.5 2.9t-3.1 1.2q-1.6 0-2.8-1t-1.6-2.6L0 17.5v-5.8l5.2 2.1q1.1-.6 2.3-.6H8l3.8-5.4q0-2.5 1.8-4.3t4.3-1.8q2.5 0 4.3 1.8T24 7.8z' })
    )
  );
};

exports.default = Icon;