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
      _react2.default.createElement('path', { d: 'M14.6 15.9l1.3 2.7q-.8 2.4-2.8 3.9T8.6 24q-2.1 0-3.9-1t-2.8-2.9-1-3.8q0-2.4 1.4-4.4T5.9 9l.3 1.8q-1.7.7-2.7 2.2t-.9 3.3q0 2.5 1.7 4.2t4.3 1.8q1.7 0 3.1-.9t2.2-2.3.7-3.2zm7.3 1.3l.8 1.6-3.5 1.7q-.1.1-.3.1-.6 0-.8-.5l-3.2-6.4H8.6q-.3 0-.6-.2t-.3-.5L6.4 2.5q0-.2.1-.5.2-.7.8-1.1T8.6.4q.9 0 1.5.7t.6 1.5q0 .9-.7 1.5t-1.6.6l.5 3.9h5.7v1.7H9.1l.2 1.7h6.1q.6 0 .8.5l3 6.1z' })
    )
  );
};

exports.default = Icon;