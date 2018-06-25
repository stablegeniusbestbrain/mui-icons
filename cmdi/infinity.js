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
      _react2.default.createElement('path', { d: 'M18.6 6.6c3 0 5.4 2.4 5.4 5.4s-2.4 5.4-5.4 5.4c-1.4 0-2.8-.6-3.8-1.6L12 13.3l-2.8 2.5c-1 1-2.4 1.6-3.8 1.6C2.4 17.4 0 15 0 12s2.4-5.4 5.4-5.4c1.4 0 2.8.6 3.8 1.6l2.8 2.5 2.8-2.5c1-1 2.4-1.6 3.8-1.6zM7.8 14.4l2.7-2.4-2.7-2.3C7.2 9 6.3 8.6 5.4 8.6 3.5 8.6 2 10.1 2 12s1.5 3.4 3.4 3.4c.9 0 1.8-.4 2.4-1zm8.4-4.8L13.5 12l2.7 2.3c.6.7 1.5 1.1 2.4 1.1 1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4c-.9 0-1.8.4-2.4 1z' })
    )
  );
};

exports.default = Icon;