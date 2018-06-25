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
        _react2.default.createElement('path', { d: 'M303 300.3V78.4c0-25.7-21-46.5-47-46.5s-47 20.8-47 46.5v221.9c-29 16.5-48.9 47.8-48.9 83.7 0 53 43 96 96 96s96-43 96-96c0-35.9-20.1-67.3-49.1-83.7zm9.5 140.3C297.4 455.7 277.4 464 256 464c-44.2 0-80.1-35.9-80.1-80 0-28.8 15.8-55.5 40.8-69.8l8.3-4.6V78.4c0-16.8 13.9-30.5 31-30.5s31 13.7 31 30.5v231.1l7.9 4.6c25.4 14.4 41 41.1 41 69.9 0 21.4-8.4 41.5-23.4 56.6z' }),
        _react2.default.createElement('path', { d: 'M272 322V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v178c-28 7.1-48.1 32.2-48.1 62 0 35.3 28.6 64 64 64s64.1-28.7 64.1-64c-.1-29.8-21-54.9-48-62z' })
      )
    )
  );
};

exports.default = Icon;