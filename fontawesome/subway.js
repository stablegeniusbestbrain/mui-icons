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
      _react2.default.createElement('path', { d: 'M16.3 0q2.5 0 4.2 1.3t1.8 3v12q0 1.7-1.7 3t-4.1 1.3l2.9 2.7q.2.2.1.4t-.4.3H4.9q-.3 0-.4-.3t.1-.4l2.9-2.7q-2.4-.1-4.1-1.3t-1.7-3v-12q0-1.8 1.8-3T7.7 0h8.6zM5.6 17.6q.9 0 1.5-.7t.6-1.5-.6-1.5-1.5-.6-1.5.6-.7 1.5.7 1.5 1.5.7zm5.5-7.3V3.4H3.9v6.9h7.2zm7.3 7.3q.9 0 1.5-.7t.7-1.5-.7-1.5-1.5-.6-1.5.6-.6 1.5.6 1.5 1.5.7zm2.2-7.3V3.4h-7.7v6.9h7.7z' })
    )
  );
};

exports.default = Icon;