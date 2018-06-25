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
      _react2.default.createElement('path', { d: 'M22.3 12.9q-2-3.2-5.1-4.8.8 1.4.8 3 0 2.5-1.8 4.3T12 17.1t-4.2-1.7T6 11.1q0-1.6.8-3-3 1.6-5.1 4.8 1.8 2.7 4.5 4.3t5.8 1.7 5.8-1.7 4.5-4.3zm-9.7-5.2q0-.3-.1-.4t-.5-.2q-1.7 0-2.9 1.2t-1.2 2.8q0 .3.2.5t.5.2.4-.2.2-.5q0-1.1.8-1.9t2-.8q.3 0 .5-.2t.1-.5zM24 12.9q0 .4-.3.9-1.8 3.1-5 4.9T12 20.6t-6.7-1.9-5-4.9q-.3-.5-.3-.9t.3-1q1.8-3 5-4.9T12 5.1 18.7 7t5 4.9q.3.5.3 1z' })
    )
  );
};

exports.default = Icon;