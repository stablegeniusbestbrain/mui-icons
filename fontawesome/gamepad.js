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
      _react2.default.createElement('path', { d: 'M10.3 14.6v-1.7q0-.2-.1-.4t-.3-.1H7.3V9.9q0-.2-.1-.4t-.3-.1H5.1q-.1 0-.3.1t-.1.4v2.5H2.1q-.1 0-.3.1t-.1.4v1.7q0 .2.1.3t.3.1h2.6v2.6q0 .2.1.3t.3.1h1.8q.1 0 .3-.1t.1-.3V15h2.6q.1 0 .3-.1t.1-.3zm7.7.8q0-.7-.5-1.2t-1.2-.5-1.2.5-.5 1.2.5 1.2 1.2.5 1.2-.5.5-1.2zm3.4-3.4q0-.7-.5-1.2t-1.2-.5-1.2.5T18 12t.5 1.2 1.2.5 1.2-.5.5-1.2zm3.5 1.7q0 2.9-2.1 4.9t-4.8 2q-2.6 0-4.5-1.7h-3Q8.6 20.6 6 20.6q-2.8 0-4.8-2t-2.1-4.9 2.1-4.8 4.8-2h12q2.8 0 4.8 2t2.1 4.8z' })
    )
  );
};

exports.default = Icon;