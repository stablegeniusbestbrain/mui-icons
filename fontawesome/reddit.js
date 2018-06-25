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
      _react2.default.createElement('path', { d: 'M14.7 15.6q.2.2 0 .4-.9.9-2.7.9T9.3 16q-.2-.2 0-.4.1-.1.2-.1t.2.1q.7.7 2.3.7 1.6 0 2.3-.7 0-.1.2-.1t.2.1zm-4.1-2.4q0 .5-.4.8t-.8.4-.9-.4-.3-.8q0-.5.3-.9t.9-.3.8.4.4.8zm5.2 0q0 .5-.3.8t-.9.4-.8-.4-.4-.8.4-.8.8-.4.9.3.3.9zm3.4-1.6q0-.7-.5-1.1t-1.1-.5-1.2.5q-1.7-1.2-4.1-1.3l.8-3.8 2.7.6q0 .5.4.9t.8.3.8-.3.4-.9-.4-.9-.8-.3q-.7 0-1.1.7L13 4.8q-.3-.1-.4.2l-.9 4.2q-2.4.1-4.1 1.3-.5-.5-1.2-.5t-1.1.5-.5 1.1q0 .5.2.9t.7.5q-.1.4-.1.8 0 1.9 1.9 3.2t4.5 1.4q2.7 0 4.5-1.4t1.9-3.2q0-.4-.1-.8.4-.2.7-.6t.2-.8zm4.8.4q0 2.4-1 4.7t-2.5 3.8-3.8 2.5-4.7 1-4.7-1-3.8-2.5T1 16.7 0 12t1-4.7 2.5-3.8T7.3 1 12 0t4.7 1 3.8 2.5T23 7.3t1 4.7z' })
    )
  );
};

exports.default = Icon;