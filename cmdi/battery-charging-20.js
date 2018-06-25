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
      _react2.default.createElement('path', { d: 'M23.1 11h-3V4l-5 10h3v8m-6-5h-8V6h8m.6-2h-1.6V2h-6v2H3.4C2.6 4 2 4.6 2 5.3v15.4c0 .7.6 1.3 1.4 1.3h9.3c.8 0 1.3-.6 1.3-1.3V5.3c0-.7-.5-1.3-1.3-1.3z' })
    )
  );
};

exports.default = Icon;