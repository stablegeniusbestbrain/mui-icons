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
      _react2.default.createElement('path', { d: 'M18.4 1.7q1.6 0 2.8 1.1t1.1 2.8v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8zm-10 4.9h-5v10.6h5.1q1.6 0 2.7-.8t1.1-2.3q0-2.1-2-2.7 1.5-.7 1.5-2.2 0-.7-.3-1.3t-.7-.8-1.1-.4-1.3-.1zm-.3 4.3H5.7V8.4h2.2q1.6 0 1.6 1.2 0 1.3-1.4 1.3zm.1 4.5H5.7v-2.9h2.6q1.6 0 1.6 1.5 0 1.4-1.7 1.4zm8.7.4q-.9 0-1.4-.5t-.4-1.4h5.5v-.4q0-1.8-1-3t-2.8-1.2q-1.7 0-2.8 1.2t-1.1 2.9q0 1.8 1.1 2.9t2.8 1.1q2.8 0 3.6-2.6h-1.8q-.2.5-.7.7t-1 .3zm-.1-4.9q1.5 0 1.7 1.6h-3.4q0-.7.5-1.2t1.2-.4zm-2.2-3.6h4.3v1.1h-4.3V7.3z' })
    )
  );
};

exports.default = Icon;