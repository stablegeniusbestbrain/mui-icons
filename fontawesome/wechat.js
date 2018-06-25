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
      _react2.default.createElement('path', { d: 'M6.1 6.2q0-.6-.4-.9T4.8 5q-.5 0-1 .3t-.4.9q0 .5.4.8t1 .4q.6 0 .9-.3t.4-.9zM16 13q0-.4-.3-.7t-.9-.3q-.4 0-.7.3t-.3.7q0 .3.3.6t.7.3q.5 0 .9-.3t.3-.6zm-3.2-6.8q0-.6-.3-.9t-.9-.3q-.5 0-1 .3t-.4.9q0 .5.4.8t1 .4q.6 0 .9-.3t.3-.9zm8.5 6.8q0-.4-.3-.7t-.9-.3q-.3 0-.6.3t-.3.7q0 .3.3.6t.6.3q.6 0 .9-.3t.3-.6zm-3.5-5.4h-1q-2.2 0-4.1 1t-3 2.8-1.1 3.9q0 1 .3 2H7.3q-.3 0-.7-.1t-.6-.1-.7-.1-.7-.1l-3.4 1.7 1-3q-3.9-2.7-3.9-6.5 0-2.3 1.3-4.2t3.5-3T8 .8q2.4 0 4.4.9T16 4.2t1.8 3.4zm7.9 7.6q0 1.5-.9 3t-2.5 2.5l.7 2.5-2.6-1.5q-2 .5-2.9.5-2.3 0-4.2-.9t-3-2.6-1.1-3.5 1.1-3.6 3-2.5 4.2-1q2.1 0 4 1t3.1 2.5 1.1 3.6z' })
    )
  );
};

exports.default = Icon;