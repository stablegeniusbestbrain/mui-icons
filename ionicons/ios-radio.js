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
        _react2.default.createElement('path', { d: 'M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-94.2 315.7c-1.6 1.5-3.6 2.3-5.6 2.3-2.1 0-4.1-.8-5.7-2.4-28-28.7-43.5-66.6-43.5-106.8 0-41.1 16.1-79.7 45.3-108.5 3.1-3.1 8.2-3.1 11.3.1 3.1 3.2 3.1 8.2-.1 11.4-26.1 25.8-40.5 60.3-40.5 97.1 0 35.9 13.8 69.9 38.9 95.5 3.1 3.1 3.1 8.2-.1 11.3zm42-50.2c3.1 3.2 3.1 8.2-.1 11.4-1.6 1.5-3.6 2.3-5.6 2.3-2.1 0-4.1-.8-5.7-2.4-17.9-18.3-27.8-42.5-27.8-68.2 0-26.3 10.3-50.9 28.9-69.3 3.1-3.1 8.2-3.1 11.3.1 3.1 3.2 3.1 8.2-.1 11.4-15.6 15.4-24.1 35.9-24.1 57.9 0 21.3 8.2 41.5 23.2 56.8zm52.2-25.4c-17.7 0-32-14.4-32-32.1 0-17.7 14.3-32.1 32-32.1s32 14.4 32 32.1c0 17.7-14.3 32.1-32 32.1zm63.6 36.6c-1.6 1.6-3.6 2.4-5.7 2.4-2 0-4-.8-5.6-2.3-3.1-3.1-3.2-8.2-.1-11.4 15-15.3 23.2-35.5 23.2-56.9 0-21.9-8.6-42.5-24.1-57.9-3.1-3.1-3.2-8.2-.1-11.4 3.1-3.2 8.2-3.2 11.3-.1 18.7 18.4 28.9 43.1 28.9 69.3 0 25.8-9.9 50-27.8 68.3zm41.9 38.9c-1.6 1.6-3.6 2.4-5.7 2.4-2 0-4-.8-5.6-2.3-3.1-3.1-3.2-8.2-.1-11.4 25.1-25.6 38.9-59.6 38.9-95.5 0-36.8-14.4-71.3-40.5-97.1-3.1-3.1-3.2-8.2-.1-11.4 3.1-3.2 8.2-3.2 11.3-.1 29.2 28.9 45.3 67.4 45.3 108.5 0 40.3-15.5 78.2-43.5 106.9z' })
      )
    )
  );
};

exports.default = Icon;