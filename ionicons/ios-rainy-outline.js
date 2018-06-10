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
        _react2.default.createElement('path', { d: 'M374.4 143.2l-13.3-.1C349.3 89.6 306 48 236 48S108.2 99.7 108.2 170.8l.3 4.8C66.2 181.2 32 220.1 32 264.5c0 47 37.9 88.5 84.6 88.5h10.6l-37.4 50.7c-2.6 3.6-1.8 8.3 1.8 10.9 1.3 1 2.9 1.4 4.4 1.4 2.3 0 5.1-.6 6.8-2.9L147 353h61.4l-72.3 99c-2.6 3.6-2.2 8 1.4 10.6 1.3 1 3.3 1.4 4.8 1.4 3.7 0 6.1-1.3 7.8-3.6l78-107.4h61.1l-37.3 50.7c-2.6 3.6-1.8 8.3 1.8 10.9 1.3 1 2.9 1.4 4.4 1.4 2.3 0 5.1-.6 6.8-2.9L309 353h61.4l-72.3 99c-2.6 3.6-2.1 7.8 1.5 10.3 1.3 1 3.2 1.7 4.7 1.7 2.3 0 5.1-.8 6.8-3.1l80.1-110.3c50.4-8.4 88.9-53.7 88.9-106.6-.1-58.6-47.4-100.8-105.7-100.8zm12.8 192.6s-8.9 1.2-20.2 1.2H116.6c-18 0-35.1-7.9-48.2-21.8-13-13.7-20.4-32.3-20.4-50.9 0-17.5 6.6-34.7 18.5-48.4 11.8-13.5 27.4-22.2 44.1-24.4l14.8-2-1-14.9-.3-4.3c.1-29.3 11.7-56.3 32.6-75.9C177.7 74.8 205.8 64 236 64c29.3 0 55 8.3 74.3 23.9 17.7 14.4 29.9 34.7 35.2 58.7l2.9 13.4c11.5-.7 26-.7 26-.7 24.5 0 47.1 8.6 63.7 24.1 16.7 15.6 25.8 37.1 25.8 60.7.1 44.6-33.6 84.5-76.7 91.7z' })
      )
    )
  );
};

exports.default = Icon;