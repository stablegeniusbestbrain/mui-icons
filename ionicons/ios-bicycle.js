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
        _react2.default.createElement('path', { d: 'M125.3 261.3c-51.3 0-93.3 42-93.3 93.3C32 406 74 448 125.3 448s93.3-42 93.3-93.3c.1-51.4-41.9-93.4-93.3-93.4zm54.6 148c-14.7 14.7-34 22.7-54.6 22.7s-39.9-8.1-54.6-22.7S48 375.2 48 354.7c0-20.6 8.1-39.9 22.7-54.6 14.7-14.7 34-22.7 54.6-22.7s39.9 8.1 54.6 22.7c14.7 14.7 22.7 34 22.7 54.6.1 20.5-8 39.9-22.7 54.6zm139.9-281.5c17.8 0 32-14.2 32-32S337.8 64 320 64s-32.2 14-32.2 31.8 14.3 32 32 32zm66.9 133.5c-51.3 0-93.3 42-93.3 93.3s42 93.3 93.3 93.3 93.3-42 93.3-93.3-42-93.3-93.3-93.3zm54.6 148c-14.7 14.7-34 22.7-54.6 22.7s-39.9-8.1-54.6-22.7c-14.7-14.7-22.7-34-22.7-54.6s8.1-39.9 22.7-54.6c14.7-14.7 34-22.7 54.6-22.7s39.9 8.1 54.6 22.7c14.7 14.7 22.7 34 22.7 54.6 0 20.5-8.1 39.9-22.7 54.6z' }),
        _react2.default.createElement('path', { d: 'M368 192h-48l-29.5-60.1c-5.6-9.3-15.9-15.9-27.1-15.9-8.4 0-16.8 3.7-22.4 9.3l-71.7 69.1c-5.6 5.6-9.3 14-9.3 22.4 0 17.4 12.6 23.6 18.5 27.1C224 270.1 240 273 240 286.1V352c0 8.8 7.2 16 16 16s16-7.2 16-16v-90c0-13.2-30.4-24-48.3-38l48.9-51.5c18.7 28.5 27.3 51.5 38 51.5H368c8.8 0 16-7.2 16-16s-7.2-16-16-16z' })
      )
    )
  );
};

exports.default = Icon;