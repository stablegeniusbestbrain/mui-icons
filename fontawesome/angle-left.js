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
      _react2.default.createElement('path', { d: 'M16.1 7.3q0 .2-.1.3l-5.3 5.3 5.3 5.2q.1.2.1.3t-.1.3l-.7.7q-.1.1-.3.1t-.3-.1l-6.2-6.2q-.2-.2-.2-.3t.2-.4l6.2-6.2q.1-.1.3-.1t.3.1l.7.7q.1.1.1.3z' })
    )
  );
};

exports.default = Icon;