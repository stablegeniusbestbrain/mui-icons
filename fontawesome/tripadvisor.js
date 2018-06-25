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
      _react2.default.createElement('path', { d: 'M5.3 13.4q0 .5-.4.8t-.9.4q-.5 0-.8-.4t-.4-.8q0-.6.4-.9t.8-.4q.6 0 .9.4t.4.9zm15.4-.1q0 .6-.3.9t-.9.4-.9-.4-.4-.9.4-.8.9-.4.9.4.3.8zm-13.9.1q0-1.1-.7-1.9t-1.9-.7-1.8.7-.8 1.9.8 1.8 1.8.7 1.9-.7.7-1.8zm15.5-.1q0-1-.8-1.8t-1.8-.7q-1.1 0-1.8.7t-.8 1.8.7 1.9 1.9.7 1.8-.7.8-1.9zM8 13.4q0 1.5-1.1 2.6t-2.7 1.1q-1.5 0-2.6-1.1T.5 13.4t1.1-2.7 2.6-1.1 2.7 1.1T8 13.4zm15.4-.1q0 1.6-1.1 2.7t-2.6 1.1q-1.6 0-2.7-1.1t-1-2.7 1-2.6 2.7-1.1q1.5 0 2.6 1.1t1.1 2.6zm-12.9.1q0-2.6-1.8-4.4T4.3 7.2q-1.7 0-3.1.8T-1 10.3t-.9 3.1.9 3.1 2.2 2.2 3.1.9q2.6 0 4.4-1.8t1.8-4.4zm8.9-7.7Q16 4.2 12 4.2q-4.3 0-7.7 1.5 1.6 0 3 .6t2.5 1.6 1.6 2.5.6 3q0-1.6.6-3T14.2 8t2.3-1.6 2.9-.7zm6.5 7.7q0-2.6-1.8-4.4t-4.4-1.8T15.3 9t-1.8 4.4 1.8 4.4 4.4 1.8 4.4-1.8 1.8-4.4zm-3.6-7.6h5.1q-.6.7-1 1.5t-.5 1.6q1.5 2 1.5 4.5 0 2.1-1.1 3.8T23.5 20t-3.8 1.1q-1.8 0-3.3-.8t-2.7-2.1q-.6.8-1.7 2.4-.1-.3-.7-1.1t-1-1.3q-1.1 1.3-2.6 2.1t-3.4.8Q2.2 21.1.5 20t-2.8-2.8-1.1-3.8q0-2.5 1.5-4.5-.1-.7-.5-1.6t-1-1.5h4.9q2-1.3 4.7-2.1t5.8-.8q3 0 5.6.8t4.7 2.1z' })
    )
  );
};

exports.default = Icon;