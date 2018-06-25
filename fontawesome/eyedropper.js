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
      _react2.default.createElement('path', { d: 'M22.7 1.3q1.3 1.2 1.3 3t-1.3 3l-3 3 1.4 1.4q.2.1.2.3t-.2.3l-2.8 2.8q-.1.2-.3.2t-.3-.2l-1.4-1.4-8.1 8.1q-.5.5-1.2.5H4.3L.9 24l-.9-.9 1.7-3.4V17q0-.7.5-1.2l8.1-8.1-1.4-1.4q-.2-.1-.2-.3t.2-.3l2.8-2.8q.1-.2.3-.2t.3.2l1.4 1.4 3-3q1.2-1.3 3-1.3t3 1.3zM6.9 19.7l7.7-7.7L12 9.4l-7.7 7.7v2.6h2.6z' })
    )
  );
};

exports.default = Icon;