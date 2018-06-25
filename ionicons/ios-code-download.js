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
        _react2.default.createElement('path', { d: 'M320 160.2l13.8-13.2L448 256 333.8 365 320 351.8 420.4 256zm-128 0L178.2 147 64 256l114.2 109 13.8-13.2L91.6 256z' }),
        _react2.default.createElement('path', { d: 'M318.9 255.5l11.6 11.6-74.5 68.5-74.5-68.5 11.6-11.6 54.7 48.7V176.4h16.4v127.8z' })
      )
    )
  );
};

exports.default = Icon;