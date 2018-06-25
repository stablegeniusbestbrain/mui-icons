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
      _react2.default.createElement('path', { d: 'M7.1 14.8l2.1 2.1-.7.7h-.8v-1.3H6.4v-.8zm5.6-5.2q.2.2-.1.4l-3.9 3.9q-.2.2-.4.1-.2-.2.1-.4l3.9-3.9q.2-.3.4-.1zM9 18.9l7.3-7.3-3.9-3.9L5.1 15v3.9H9zm8.1-8.2l1.3-1.2q.4-.4.4-.9t-.4-.9l-2.1-2.1q-.3-.4-.9-.4t-.9.4l-1.2 1.3zm5.2-5.1v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;