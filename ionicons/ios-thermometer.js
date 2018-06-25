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
        _react2.default.createElement('path', { d: 'M303 300.3V78.5c0-25.7-21-46.5-47-46.5s-47 20.8-47 46.5v221.9c-29 16.5-49 47.8-49 83.6 0 53 42.9 96 95.9 96s96.1-43 96.1-96c0-36-20-67.3-49-83.7zM256.2 448c-35.3 0-64-28.6-64-64 0-29.8 19.8-54.9 47.8-62V144c0-8.8 7.2-16 16-16s16 7.2 16 16v178c27 7.1 48.1 32.2 48.1 62 0 35.3-28.6 64-63.9 64z' }),
        _react2.default.createElement('circle', { cx: '255.8', cy: '384.2', r: '48' })
      )
    )
  );
};

exports.default = Icon;