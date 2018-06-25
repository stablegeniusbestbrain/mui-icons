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
      _react2.default.createElement('path', { d: 'M8.6 17.1q0-.7-.5-1.2t-1.2-.5-1.3.5-.5 1.2.5 1.3 1.3.5 1.2-.5.5-1.3zm4.7 1.3q-.2-3.1-2.4-5.3t-5.3-2.4q-.2 0-.3.1t-.2.4v1.7q0 .1.2.3t.2.1q2.1.1 3.6 1.6t1.6 3.6q0 .1.1.2t.3.2h1.7q.2 0 .4-.2t.1-.3zm5.1 0q-.1-2-.7-4t-1.9-3.5-2.7-2.7-3.5-1.9-4-.7q-.2 0-.3.1-.2.1-.2.3v1.7q0 .2.2.3t.3.2q2.7.1 5 1.4t3.8 3.8 1.4 5q.1.2.2.3t.3.2H18q.2 0 .3-.2.1-.1.1-.3zm3.9-12.8v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;