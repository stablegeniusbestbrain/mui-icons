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
        _react2.default.createElement('path', { d: 'M417.5 160h-61.7c-32.1-36-42.2-48-54.5-48h-88.5c-12.3 0-22.2 12-54.5 48H145v-16h-34v16H97.5C79.9 160 64 173.2 64 190.7v176c0 17.5 15.9 33.3 33.5 33.3h320c17.6 0 30.5-15.8 30.5-33.3v-176c0-17.5-12.9-30.7-30.5-30.7zM432 366.7c0 9.3-6.2 17.3-14.5 17.3h-320c-8.7 0-17.5-8.7-17.5-17.3v-176c0-8.2 8.1-14.7 17.5-14.7h67.8l4.8-3.2c4-4.5 7.7-10 11.1-13.8 11.3-12.7 19.5-21.7 25.3-26.9 4.7-4.2 6.2-4.1 6.2-4.1h88.5s1.6-.1 6.7 4.5c6.1 5.5 14.7 16.5 26.6 29.8 2.9 3.3 6 6.8 9.3 10.5l4.8 3.2h68.9c8.8 0 14.5 6 14.5 14.7v176z' }),
        _react2.default.createElement('path', { d: 'M256 189.5c-47.1 0-85.5 38.4-85.5 85.5s38.4 85.5 85.5 85.5 85.5-38.4 85.5-85.5-38.4-85.5-85.5-85.5zm0 155c-38.4 0-69.5-31.1-69.5-69.5s31.1-69.5 69.5-69.5 69.5 31.1 69.5 69.5-31.1 69.5-69.5 69.5zM352 192h17v17h-17z' }),
        _react2.default.createElement('circle', { cx: '256', cy: '275', r: '32' })
      )
    )
  );
};

exports.default = Icon;