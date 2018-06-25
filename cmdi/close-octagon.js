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
      _react2.default.createElement('path', { d: 'M8.3 3L3 8.3v7.4L8.3 21h7.4l5.3-5.3V8.3L15.7 3M8.4 7l3.6 3.6L15.6 7 17 8.4 13.4 12l3.6 3.6-1.4 1.4-3.6-3.6L8.4 17 7 15.6l3.6-3.6L7 8.4' })
    )
  );
};

exports.default = Icon;