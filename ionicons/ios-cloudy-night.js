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
        _react2.default.createElement('path', { d: 'M276.6 295.2c-2.5 0-4.9 0-7.3.2-.7.1-1.4.1-2.1.2-4.3-19.1-14.5-35.9-28.6-48.5-1-.9-2.1-1.8-3.1-2.7-1-.8-2-1.6-3-2.3-1.4-1.1-2.9-2.1-4.4-3-2.8-1.8-5.6-3.5-8.6-5-1.1-.6-2.3-1.1-3.4-1.7-11.6-5.4-24.5-8.4-38.1-8.4h-2.9c-.1 0-.2-.1-.3-.1H172v.1c-48 3.1-85.5 42.9-85.5 91.5 0 3.1.2 6.1.5 9.1-30.8 2.7-55 29.7-55 61.3 0 2.1.1 4.2.3 6.2 3 30.7 28.4 55.8 59.7 55.8h184.6c37.8 0 69.1-28.2 74.6-64.6.2-1.1.3-2.1.4-3.2 0-.4.1-.8.1-1.2.1-.8.1-1.6.2-2.4 0-.4 0-.7.1-1.1.1-1.1.1-2.3.1-3.5 0-5.2-.5-10.3-1.5-15.3-7.2-34.6-37.6-61.4-74-61.4z' }),
        _react2.default.createElement('path', { d: 'M450 306c-2.5.1-5 .2-7.5.2-41.4 0-80.4-15.8-109.7-44.4-29.3-28.6-45.4-66.6-45.4-107.1 0-23 5.2-45.3 15.2-65.5 4.4-8.9 8.9-17.3 15-25.3h-.3c-10.8 1.2-20.2 3.3-30.3 6.4-61.8 19-107.8 72.7-114.1 137.7 1.8-.1 3.5-.1 5.3-.1 24.5 0 48.5 8.5 67.6 24.1 15.2 12.4 26.8 28.8 33.5 47.1 23.5.6 45.5 10.4 62.3 27.6 17.2 17.6 26.6 40.8 26.6 65.2 0 3.1-.2 6.1-.4 9.1 37.5-7 70.4-26.4 94.2-53.7 6.9-7.9 13-15.3 18.3-24.5-10 2.5-20.1 2.7-30.3 3.2z' })
      )
    )
  );
};

exports.default = Icon;