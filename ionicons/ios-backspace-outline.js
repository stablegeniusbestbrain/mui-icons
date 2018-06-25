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
        _react2.default.createElement('path', { d: 'M395 96H230c-46.7 0-73.2 34.7-102 63.5s-72.1 74.7-72.1 74.7C51 239.8 48 247 48 255.1c0 8 3 15.3 7.9 21 0 0 34.3 37.6 72.1 75.5 37.8 37.8 56.7 64.5 102 64.5h165c38.5 0 69-32.5 69-71V165c0-38.5-30.5-69-69-69zm53 249c0 14.5-5.3 28.4-15.5 38.7-10.1 10.4-23.3 16.3-37.5 16.3H230c-32.6 0-48.2-16.3-76.5-45.4l-85.7-89.2C66 263.3 64 259.8 64 255c0-4.7 2-8.2 3.8-10.3l83.1-86.1c12.2-12.7 23.8-24.5 36.9-33.3 13.8-9.3 27.2-13.4 42.2-13.4h165c14.3 0 27.5 5.3 37.6 15.4 10.1 10.1 15.4 23.3 15.4 37.6V345z' }),
        _react2.default.createElement('path', { d: 'M316.4 256l63.6-63.4-14.6-14.6-63.6 63.5-63.2-63.2-14.6 14.6 63.3 63.1-63.3 63.2 14.6 14.5 63.2-63.1 63.6 63.4 14.6-14.5z' })
      )
    )
  );
};

exports.default = Icon;