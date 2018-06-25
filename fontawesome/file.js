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
      _react2.default.createElement('path', { d: 'M15.4 6.9V.5q.3.2.5.4l5.5 5.5q.2.2.4.5h-6.4zm-1.7.4q0 .5.4.9t.9.4h7.3v14.1q0 .6-.4.9t-.9.4H3q-.5 0-.9-.4t-.4-.9V1.3q0-.6.4-.9T3 0h10.7v7.3z' })
    )
  );
};

exports.default = Icon;