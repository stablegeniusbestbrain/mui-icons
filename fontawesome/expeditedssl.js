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
      _react2.default.createElement('path', { d: 'M12 .9q-2.3 0-4.3.8T4.1 4.1 1.7 7.7.9 12t.8 4.3 2.4 3.6 3.6 2.4 4.3.8 4.3-.8 3.6-2.4 2.4-3.6.8-4.3-.8-4.3-2.4-3.6-3.6-2.4T12 .9zm0-.9q2.4 0 4.7 1t3.8 2.5T23 7.3t1 4.7-1 4.7-2.5 3.8-3.8 2.5-4.7 1-4.7-1-3.8-2.5T1 16.7 0 12t1-4.7 2.5-3.8T7.3 1 12 0zM6.6 11.1q.3 0 .3.3v6.4q0 .2-.3.2h-.4q-.2 0-.2-.2v-6.4q0-.3.2-.3h.4zm5.4.9q.7 0 1.2.5t.5 1.2q0 .5-.2.9t-.6.6v1.5q0 .2-.2.3t-.3.1h-.8q-.2 0-.3-.1t-.2-.3v-1.5q-.3-.2-.6-.6t-.2-.9q0-.7.5-1.2T12 12zm0-10.3q2.8 0 5.2 1.4t3.7 3.7 1.4 5.2-1.4 5.2-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7zM7.3 8.1v1.3q0 .2.1.3t.3.2h.9q.2 0 .3-.2t.1-.3V8.1q0-1.2.9-2.1t2.1-.9 2.1.9.9 2.1v1.3q0 .2.1.3t.3.2h.9q.2 0 .3-.2t.1-.3V8.1q0-1.9-1.4-3.3T12 3.4 8.7 4.8 7.3 8.1zM18.9 18v-6.9q0-.3-.3-.6t-.6-.2H6q-.3 0-.6.2t-.3.6V18q0 .3.3.6t.6.3h12q.3 0 .6-.3t.3-.6z' })
    )
  );
};

exports.default = Icon;