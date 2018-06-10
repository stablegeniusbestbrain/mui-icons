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
        _react2.default.createElement('path', { d: 'M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.91 0-42.467-5.77-60.246-15.87C71.544 358.33 42.643 406 32 448h293.912c-10.64-42-39.537-89.683-86.704-104.063zm-60.255-223.902c-58.48 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857 58.48 0 105.886-47.394 105.886-105.857 0-58.464-47.41-105.858-105.887-105.858zm0 186.488c-33.67 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.01-40.326 50.523-73.997 50.523z' }),
        _react2.default.createElement('path', { d: 'M322.602 384H480c-10.638-42-39.537-81.69-86.703-96.072-17.78 10.104-38.343 15.873-60.256 15.873-14.822 0-29.023-2.653-42.167-7.49-7.445 12.47-16.927 25.593-27.974 34.907C289.244 341.354 309.145 364 322.6 384zm-16.057-184h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.874 0-17.403-1.692-25.374-4.51a128.41 128.41 0 0 1-6.52 25.118c10.066 3.175 20.78 4.863 31.895 4.863 58.48 0 105.887-47.41 105.887-105.872 0-58.464-47.407-105.865-105.886-105.865-37.49 0-70.426 19.703-89.242 49.09C275.608 131.383 298.96 163 306.545 200z' })
      )
    )
  );
};

exports.default = Icon;