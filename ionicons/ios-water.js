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
        _react2.default.createElement('path', { d: 'M352 148c-37-52-72.5-82.5-96-100-23.1 16-58.6 48.1-95.8 99.8s-62.9 107.8-64.1 170c0 1.2-.1 2.5-.1 3.7 0 18.3 3.9 35.8 10.9 51.8 4.1 9.3 9.2 18 15.2 26.2 28.5 38.8 77.8 64.4 133.8 64.4 88.4 0 160.1-63.8 160.1-142.4 0-63.3-27-121.5-64-173.5zm-86.1 263c-15.8 0-32.7-1.4-45.9-7.4C307 390 339 358 359.8 281.4c5.2 11.2 6.2 23.7 6.2 36.8 0 51.2-44.8 92.8-100.1 92.8z' })
      )
    )
  );
};

exports.default = Icon;