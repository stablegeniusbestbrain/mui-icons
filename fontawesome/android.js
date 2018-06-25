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
      _react2.default.createElement('path', { d: 'M9.2 6.5q.2 0 .3-.2t.2-.4-.2-.3-.3-.2-.4.2-.1.3.1.4.4.2zm5.6 0q.2 0 .4-.2t.1-.4-.1-.3-.4-.2-.3.2-.2.3.2.4.3.2zM4 8.9q.5 0 .9.4t.4 1v5.8q0 .5-.4.9t-.9.4-1-.4-.4-.9v-5.8q0-.6.4-1t1-.4zm14.1.3v8.9q0 .6-.4 1.1t-1 .4h-1v3q0 .6-.4 1t-1 .4-1-.4-.4-1v-3h-1.8v3q0 .6-.4 1t-1 .4q-.6 0-1-.4t-.4-1v-3h-1q-.6 0-1-.4t-.4-1.1V9.2h12.2zM15 3.8q1.5.7 2.3 2t.9 2.9H5.8q0-1.6.9-2.9t2.3-2L8 2q-.1-.2.1-.3.2 0 .2.1l1 1.8Q10.6 3 12 3t2.7.6l1-1.8q0-.1.2-.1.2.1.1.3zm6.4 6.5v5.8q0 .5-.4.9t-1 .4q-.5 0-.9-.4t-.4-.9v-5.8q0-.6.4-1t.9-.4q.6 0 1 .4t.4 1z' })
    )
  );
};

exports.default = Icon;