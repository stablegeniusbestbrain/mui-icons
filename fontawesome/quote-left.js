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
      _react2.default.createElement('path', { d: 'M11.1 12.9V18q0 1.1-.7 1.8t-1.8.8H3.4q-1 0-1.8-.8T.9 18V8.6q0-1.4.5-2.7t1.5-2.2 2.2-1.4 2.6-.6h.9q.3 0 .6.3t.2.6v1.7q0 .3-.2.6t-.6.2h-.9q-1.4 0-2.4 1t-1 2.5V9q0 .5.4.9t.9.4h3q1 0 1.8.7t.7 1.9zm12 0V18q0 1.1-.7 1.8t-1.8.8h-5.2q-1 0-1.8-.8t-.7-1.8V8.6q0-1.4.5-2.7t1.5-2.2 2.2-1.4 2.6-.6h.9q.3 0 .6.3t.2.6v1.7q0 .3-.2.6t-.6.2h-.9q-1.4 0-2.4 1t-1 2.5V9q0 .5.4.9t.9.4h3q1 0 1.8.7t.7 1.9z' })
    )
  );
};

exports.default = Icon;