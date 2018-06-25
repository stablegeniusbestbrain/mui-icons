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
      _react2.default.createElement('path', { d: 'M18.9 12.9v-1.8q0-.3-.3-.6t-.6-.2h-6.7l2.5-2.5q.3-.3.3-.6t-.3-.7l-1.2-1.2q-.3-.2-.6-.2t-.6.2l-4.9 4.9-1.2 1.2q-.2.2-.2.6t.2.6l1.2 1.2 4.9 4.9q.2.2.6.2t.6-.2l1.2-1.2q.2-.3.2-.7t-.2-.6l-2.5-2.5H18q.3 0 .6-.2t.3-.6zm3.4-.9q0 2.8-1.4 5.2t-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;