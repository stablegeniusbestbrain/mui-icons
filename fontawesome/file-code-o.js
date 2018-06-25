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
      _react2.default.createElement('path', { d: 'M21.4 5.1q.4.4.6 1t.3 1.2v15.4q0 .6-.4.9t-.9.4H3q-.5 0-.9-.4t-.4-.9V1.3q0-.6.4-.9T3 0h12q.5 0 1.2.3t1 .6zm-6-3.3v5.1h5.1l-.3-.6L16 2.1l-.6-.3zm5.2 20.5V8.6H15q-.5 0-.9-.4t-.4-.9V1.7H3.4v20.6h17.2zm-12.5-12q.2-.2.3-.2t.3.1l.7.5q.2.1.2.3t-.1.3l-2.4 3.3 2.4 3.2q.1.2.1.3t-.2.3l-.7.5q-.1.1-.3.1t-.3-.1l-3-4.1q-.2-.2 0-.5zm10.8 4q.2.3 0 .5l-3 4.1q-.2.1-.3.1t-.3-.1l-.7-.5q-.2-.1-.2-.3t.1-.3l2.4-3.2-2.4-3.3q-.1-.1-.1-.3t.2-.3l.7-.5q.1-.1.3-.1t.3.2zm-8.3 6.2q-.2 0-.3-.2t-.1-.3l1.9-11.1q0-.2.2-.3t.3-.1l.8.2q.2 0 .3.1t.1.3l-1.9 11.2q0 .2-.2.3t-.3 0z' })
    )
  );
};

exports.default = Icon;