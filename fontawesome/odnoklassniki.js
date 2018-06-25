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
      _react2.default.createElement('path', { d: 'M12 12.1q-2.5 0-4.3-1.7T5.9 6.1q0-2.5 1.8-4.3T12 0t4.3 1.8 1.8 4.3q0 2.5-1.8 4.3T12 12.1zm0-9q-1.2 0-2.1.9T9 6.1q0 1.2.9 2.1t2.1.9 2.1-.9.9-2.1q0-1.3-.9-2.1T12 3.1zm7 9.8q.2.3.2.6t-.1.6-.3.5-.6.5-.8.6q-1.5.9-4.2 1.2l1 1 3.5 3.6q.4.4.4.9t-.4 1l-.1.2q-.4.4-1 .4t-1-.4L12 20l-3.6 3.6q-.4.4-1 .4t-.9-.4l-.2-.2q-.4-.4-.4-1t.4-.9l3.6-3.6.9-1q-2.7-.3-4.2-1.2-.5-.4-.8-.6t-.6-.5-.3-.5-.1-.6.2-.6q.1-.3.4-.5t.5-.3.8 0 .9.5q0 .1.2.2t.5.3 1 .4 1.2.3 1.5.2q1.2 0 2.3-.4t1.6-.6l.5-.4q.5-.3.9-.5t.8 0 .5.3.4.5z' })
    )
  );
};

exports.default = Icon;