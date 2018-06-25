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
      _react2.default.createElement('path', { d: 'M17 4v4h1v2h-.4L21 23h-2.1l-.5-2.2-6.4-3.6-6.4 3.6-.5 2.2H3l3.4-13H6V8h1V4H6V3l12-2v3h-1zM7.3 14.4l-1 3.7L10 16l-2.7-1.6zm8.3-4.4H8.4l-.6 2.4 4.2 2.4 4.2-2.4-.6-2.4zm2.1 8.1l-1-3.7L14 16l3.7 2.1z' })
    )
  );
};

exports.default = Icon;