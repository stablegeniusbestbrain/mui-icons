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
      _react2.default.createElement('path', { d: 'M13 6l2-2 1.4 1.4L12 9.8 7.6 5.4 9 4l2 2V2h2v4zM3 11h18v2H3v-2zm10 7v4h-2v-4l-2 2-1.4-1.4 4.4-4.4 4.4 4.4L15 20l-2-2z' })
    )
  );
};

exports.default = Icon;