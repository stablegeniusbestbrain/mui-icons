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
      _react2.default.createElement('path', { d: 'M12.4 11.1q0-.1-.1-.3t-.3-.1q-.9 0-1.5.6t-.6 1.6q0 .1.1.3t.3.1.3-.1.1-.3q0-.6.4-1t.9-.3q.2 0 .3-.1t.1-.4zm3 1.8q0 1.4-1 2.4t-2.4 1-2.4-1-1-2.4 1-2.4 2.4-1 2.4 1 1 2.4zM1.7 20.6h20.6v-1.7H1.7v1.7zm15.4-7.7q0-2.1-1.5-3.7T12 7.7 8.4 9.2t-1.5 3.7 1.5 3.6T12 18t3.6-1.5 1.5-3.6zM3.4 4.3h5.2V2.6H3.4v1.7zM1.7 6.9h20.6V3.4H11.2l-.9 1.7H1.7v1.8zM24 3.4v17.2q0 .7-.5 1.2t-1.2.5H1.7q-.7 0-1.2-.5T0 20.6V3.4q0-.7.5-1.2t1.2-.5h20.6q.7 0 1.2.5t.5 1.2z' })
    )
  );
};

exports.default = Icon;