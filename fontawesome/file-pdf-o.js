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
      _react2.default.createElement('path', { d: 'M21.4 5.1q.4.4.6 1t.3 1.2v15.4q0 .6-.4.9t-.9.4H3q-.5 0-.9-.4t-.4-.9V1.3q0-.6.4-.9T3 0h12q.5 0 1.2.3t1 .6zm-6-3.3v5.1h5.1l-.3-.6L16 2.1l-.6-.3zm5.2 20.5V8.6H15q-.5 0-.9-.4t-.4-.9V1.7H3.4v20.6h17.2zm-6.9-8q.4.4 1.1.8.8-.1 1.6-.1 1.9 0 2.4.7.2.3 0 .7h-.1q0 .5-.9.5-.7 0-1.6-.2t-1.7-.7q-3 .3-5.2 1.1-2.1 3.5-3.3 3.5-.2 0-.4-.1l-.3-.2h-.1q-.1-.2 0-.5.1-.6.7-1.3t1.8-1.2q.2-.2.3 0v.1q.7-1.2 1.4-2.7 1-1.8 1.4-3.5-.3-1.1-.4-2.1t.1-1.7q.2-.5.6-.5h.3q.3 0 .4.2.3.2.2.9-.1 0-.1.1v.5q0 1.6-.2 2.6.8 2.2 2 3.1zM6 19.8q.7-.3 1.8-2.1-.7.6-1.2 1.2t-.6.9zm5.3-12.3q-.2.6 0 1.8 0-.1.1-.6l.1-.6V8q0-.3-.2-.5zm-1.7 8.9q1.9-.7 3.8-1.1l-.1-.1-.2-.2q-1.1-.9-1.7-2.4-.4 1.2-1.2 2.7-.4.7-.6 1.1zm8.7-.2q-.3-.4-1.9-.4 1 .4 1.7.4h.2z' })
    )
  );
};

exports.default = Icon;