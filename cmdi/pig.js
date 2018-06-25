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
      _react2.default.createElement('path', { d: 'M9.5 9C8.7 9 8 9.7 8 10.5S8.7 12 9.5 12s1.5-.7 1.5-1.5S10.3 9 9.5 9zm5 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5S15.3 9 14.5 9zM12 4h.7c.9-.8 2.1-1.4 3-1.6 1.9-.5 5.2-.2 5.6 1.4.3 1.2-.7 2.7-2.3 3.6 1.3 1.5 2 3.5 2 5.6 0 5-4 9-9 9s-9-4-9-9c0-2.1.7-4.1 2-5.6C3.4 6.5 2.4 5 2.7 3.8c.4-1.6 3.7-1.9 5.6-1.4.9.2 2.1.8 3 1.6h.7zm-2 12c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm4 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-2-3c-2.8 0-5 2.3-5 4s2.2 3 5 3 5-1.3 5-3-2.2-4-5-4zM7.8 4.3c-.5-.1-3.2.1-3.2.1s2.2 1.7 2.6 1.8c.5.1 2.6.2 2.7-.3.2-.5-1.7-1.5-2.1-1.6zm8.4 0c-.4.1-2.3 1.1-2.1 1.6.1.5 2.2.4 2.7.3.4-.1 2.6-1.8 2.6-1.8s-2.7-.2-3.2-.1z' })
    )
  );
};

exports.default = Icon;