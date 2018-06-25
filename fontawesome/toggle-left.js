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
      _react2.default.createElement('path', { d: 'M15.4 7.7v8.6q0 .3-.2.6t-.6.2q-.3 0-.5-.1l-6-4.3q-.4-.3-.4-.7t.4-.7l6-4.3q.2-.1.5-.1t.6.2.2.6zm3.5 10.7V5.6q0-.2-.2-.3t-.3-.2H5.6q-.2 0-.3.2t-.2.3v12.8q0 .2.2.3t.3.2h12.8q.2 0 .3-.2t.2-.3zm3.4-12.8v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;