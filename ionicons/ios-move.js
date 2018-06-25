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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M389.6 165.5l-11.3 11.3 70.8 71.2H264V62.9l71.2 70.9 11.3-11.4L256 31.9l-90.5 90.5 11.3 11.3L248 62.9V248H62.9l70.8-71.2-11.3-11.3L32 256l90.5 90.5 11.3-11.3L62.9 264H248v185l-71.2-70.8-11.3 11.3L256 480l90.5-90.5-11.3-11.3L264 449V264h185.1l-70.9 71.2 11.3 11.3L480 256z' })
      )
    )
  );
};

exports.default = Icon;