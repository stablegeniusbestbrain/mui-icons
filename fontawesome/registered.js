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
      _react2.default.createElement('path', { d: 'M14 9.4q0-1.2-.8-1.6-.5-.2-1.6-.2H9.9v3.7h2.2q.9 0 1.4-.5t.5-1.4zm.7 3.8l2.7 5q.1.3 0 .4-.1.3-.4.3h-2q-.3 0-.4-.3L12 13.7H9.9v4.7q0 .2-.1.3t-.3.2H7.7q-.2 0-.3-.2t-.1-.3V5.6q0-.2.1-.3t.3-.2h4q1.7 0 2.5.4 1.1.4 1.8 1.4t.6 2.4q0 1.3-.5 2.3T14.5 13q.1.2.2.2zM12 2.1q-2 0-3.8.8T5 5 2.9 8.2 2.1 12t.8 3.8T5 19t3.2 2.1 3.8.8 3.8-.8T19 19t2.1-3.2.8-3.8-.8-3.8T19 5t-3.2-2.1-3.8-.8zM24 12q0 2.4-1 4.7t-2.5 3.8-3.8 2.5-4.7 1-4.7-1-3.8-2.5T1 16.7 0 12t1-4.7 2.5-3.8T7.3 1 12 0t4.7 1 3.8 2.5T23 7.3t1 4.7z' })
    )
  );
};

exports.default = Icon;