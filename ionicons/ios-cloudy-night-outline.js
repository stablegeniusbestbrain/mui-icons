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
        _react2.default.createElement('path', { d: 'M276.6 295.4c-.5 0-1.1-.1-1.6-.1-2.6 0-5.2 0-7.8.3C258 254.8 221.6 224 178 224c-50.5 0-91.5 41-91.5 91.6 0 3.1.2 6.1.5 9.1-30.8 2.7-55 30.2-55 61.8 0 33.4 26.6 62.5 60 62.5h184.6c41.7 0 75.4-34.8 75.4-76.5s-33.8-77.1-75.4-77.1zM318.5 415c-11.3 11.4-26.2 18-41.9 18H92c-11.6 0-22.6-5.1-30.9-13.9-8.3-8.7-13.1-20.8-13.1-32.8 0-11.4 4.2-22.4 11.9-31 7.6-8.5 17.7-13.7 28.5-14.7l16.1-1.4-1.6-16.1c-.2-2.5-.4-5.1-.4-7.6 0-41.7 33.9-75.6 75.5-75.6 17.4 0 33.8 5.8 47.4 16.9 13.2 10.8 22.5 25.8 26.2 42.3l3.2 14.2 14.4-1.9c1.6-.2 3.7-.4 5.8-.4h1.6c15.7 0 30.6 6.5 41.9 18.1 11.3 11.6 17.6 27 17.6 43-.1 16.1-6.3 31.5-17.6 42.9z' }),
        _react2.default.createElement('path', { d: 'M450 306c-2.5.1-5 .2-7.5.2-41.4 0-80.4-15.8-109.7-44.4-29.3-28.6-45.4-66.6-45.4-107.1 0-23 5.2-45.3 15.2-65.5 4.4-8.9 8.9-17.3 15-25.3h-.3c-10.8 1.2-20.2 3.3-30.3 6.4-61.8 19-107.8 72.7-114.1 137.7 1.8-.1 3.5-.1 5.3-.1 3.6 0 7.2.2 10.8.6 2.7-25.8 12.4-50.1 28.4-71.1 17.2-22.6 41.3-40.1 68.3-49.7-9.4 21.1-14.2 43.6-14.2 67 0 44.8 17.9 86.9 50.3 118.5 32.3 31.5 75.2 48.9 120.9 48.9h2.4c-20.8 21.7-47.8 36.4-77.1 42.6.2 2.4.3 4.8.3 7.2 0 3.1-.2 6.1-.4 9.1 37.5-7 70.4-26.4 94.2-53.7 6.9-7.9 13-15.3 18.3-24.5-10.1 2.5-20.2 2.7-30.4 3.2z' })
      )
    )
  );
};

exports.default = Icon;