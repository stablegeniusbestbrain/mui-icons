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
      _react2.default.createElement('path', { d: 'M7.7 18.9q0-.8-.5-1.3T6 17.1t-1.2.5-.5 1.3.5 1.2 1.2.5 1.2-.5.5-1.2zM2.6 12h5.1V8.6H5.6q-.2 0-.3.1l-2.6 2.6q-.1.2-.1.3v.4zm17.1 6.9q0-.8-.5-1.3t-1.2-.5-1.2.5-.5 1.3.5 1.2 1.2.5 1.2-.5.5-1.2zm1.7-9V7.3q0-.2-.1-.3t-.3-.1h-3v-3q0-.2-.1-.4t-.3-.1H15q-.2 0-.3.1t-.1.4v3h-3q-.2 0-.3.1t-.2.3v2.6q0 .1.2.3t.3.1h3v3q0 .2.1.3t.3.1h2.6q.2 0 .3-.1t.1-.3v-3h3q.2 0 .3-.1t.1-.3zm3.5-7.3V18q0 .3-.3.6t-.6.3h-2.6q0 1.4-1 2.4t-2.4 1-2.4-1-1-2.4H9.4q0 1.4-1 2.4t-2.4 1-2.4-1-1-2.4H.9q-.4 0-.6-.3T0 18t.3-.6.6-.3v-5.5q0-.4.1-.8t.5-.7l2.6-2.6q.3-.3.7-.5t.8-.1h2.1V2.6q0-.4.3-.6t.6-.3H24q.3 0 .6.3t.3.6z' })
    )
  );
};

exports.default = Icon;