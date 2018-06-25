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
      _react2.default.createElement('path', { d: 'M12.7 12q0 .3-.2.6t-.6.2q-.3 0-.6-.2t-.2-.6q0-.3.2-.6t.6-.2.6.2.2.6zm.2.7L17.6 5q-.1.1-.9.8T15 7.4t-1.8 1.7-1.6 1.4-.7.7L6.3 19q.1-.1.9-.8t1.7-1.6 1.8-1.7 1.5-1.5.7-.7zm8.7-.7q0 2.7-1.4 5l-.2-.2q-.1-.1-.4-.2t-.2-.1q-.2 0-.2.2 0 .1.8.6-1 1.5-2.5 2.5t-3.2 1.5l-.2-.9q0-.1-.2-.1h-.1l-.1.2.3.9q-1 .2-2 .2-2.7 0-5-1.4 0-.1.2-.3t.3-.5.1-.2q0-.2-.2-.2l-.2.2q-.2.2-.3.5t-.2.3q-1.5-1-2.5-2.5t-1.5-3.3l.9-.2q.1 0 .1-.2v-.1h-.2l-.9.2q-.2-1-.2-1.9 0-2.8 1.5-5.1l.2.2q.2.2.4.2t.3.1q.1 0 .1-.1t-.1-.2-.5-.3l-.2-.2q1-1.5 2.5-2.5t3.3-1.4l.2.9q0 .1.2.1l.1-.1q.1-.1 0-.1l-.2-.9q1-.2 1.8-.2 2.7 0 5.1 1.5-.5.7-.5.9 0 .1.1.1.2 0 .7-.8 1.4 1 2.5 2.5t1.4 3.2l-.7.2q-.2 0-.2.2l.1.1q.1.1.1 0l.8-.2q.2 1 .2 1.9zm1.1 0q0-2.2-.8-4.2t-2.3-3.4-3.4-2.3-4.2-.8-4.2.8-3.4 2.3-2.3 3.4-.8 4.2.8 4.2 2.3 3.4 3.4 2.3 4.2.8 4.2-.8 3.4-2.3 2.3-3.4.8-4.2zm1.3 0q0 2.4-1 4.7t-2.5 3.8-3.8 2.5-4.7 1-4.7-1-3.8-2.5T1 16.7 0 12t1-4.7 2.5-3.8T7.3 1 12 0t4.7 1 3.8 2.5T23 7.3t1 4.7z' })
    )
  );
};

exports.default = Icon;