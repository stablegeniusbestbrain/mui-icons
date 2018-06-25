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
      _react2.default.createElement('path', { d: 'M12.1 17.7v1.7q0 3.9-.1 4.1-.2.4-.7.5-.7.1-2.4-.5t-2.2-1.2q-.2-.2-.2-.5v-.3q.1-.2.5-.7t2.4-2.9l.8-.9q.2-.3.5-.3t.7 0q.3.1.5.4t.2.6zm-2-3.4q-.1.7-.7.9l-1.6.6q-3.7 1.1-3.9 1.1-.5 0-.8-.4-.1-.4-.2-1-.1-1.1 0-2.3t.4-1.6.8-.5q.1 0 2.7 1.1.9.3 1.5.6l1.1.4q.3.2.5.5t.2.6zm11 4q-.1.7-1.2 2.1t-1.8 1.7q-.5.2-.8-.1-.2-.1-2.5-3.8l-.6-1q-.2-.3-.2-.6t.3-.7q.4-.5 1.1-.3l1.6.5q2.7.9 3.2 1.1t.6.3q.4.3.3.8zm-9-8.5q.1 1.4-.7 1.7-.8.2-1.5-1l-5.1-8q-.1-.5.3-.8.5-.6 2.8-1.2t3-.5q.5.2.6.6.1.3.3 4.1t.3 5.1zm8.9 1.5q0 .5-.3.8-.2.1-4.5 1.1-.9.2-1.2.3-.3.1-.6-.1t-.5-.4q-.4-.6 0-1.2l1-1.3q1.7-2.3 2-2.8t.5-.5q.4-.2.9 0 .6.3 1.6 1.8t1.1 2.2v.1z' })
    )
  );
};

exports.default = Icon;