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
      _react2.default.createElement('path', { d: 'M21.8 11.1v2.6q-1.4.3-2.7.3-.9 1.9-2.2 3.7t-2.4 2.9-1.7 1.4q-1.1.6-2.2-.1-.4-.2-.8-.5t-1.2-1.2-1.3-1.7-1.5-2.4-1.4-3.3-1.2-4.2-1-5.3H6q.4 3 1 5.4t1.4 4.2 1.6 3.2 1.9 2.6q2.2-2.3 3.8-5.4-1.9-1-3-3t-1.1-4.4q0-2.6 1.4-4.3T16.8 0q2.4 0 3.7 1.4t1.3 4q0 2.1-.8 3.8-.1 0-.3.1t-.6 0-.8-.1-.9-.3-.6-.7q.4-1.4.4-2.5T17.8 4t-1.1-.7q-.7 0-1.1.7t-.4 1.9q0 2.5 1.4 3.9t3.5 1.5q.9 0 1.7-.2z' })
    )
  );
};

exports.default = Icon;