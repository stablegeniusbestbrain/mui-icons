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
        _react2.default.createElement('path', { d: 'M255.8 68c30.2 24.1 58.1 54 83.1 89.2 41.1 57.7 61 111.4 61 164.3 0 69.7-64.6 126.4-144.1 126.4-49.1 0-94.3-21.7-120.9-57.9-5.4-7.3-9.9-15.1-13.4-23.1-6.3-14.6-9.6-29.8-9.6-45.4v-1.2c0-.7.1-1.5.1-2.3 1-52.6 21-105.2 61.1-160.8 34.5-47.8 65.3-75.5 82.7-89.2m.3-20c-23.1 16-58.6 48.1-95.8 99.8s-62.9 107.8-64.1 170c0 1.2-.1 2.5-.1 3.7 0 18.3 3.9 35.8 10.9 51.8 4.1 9.3 9.2 18 15.2 26.2 28.5 38.8 77.8 64.4 133.8 64.4 88.4 0 160.1-63.8 160.1-142.4 0-63.4-27-121.6-64-173.6s-72.6-82.4-96-99.9z' }),
        _react2.default.createElement('path', { d: 'M265.9 411c-15.8 0-32.7-1.4-45.9-7.4C307 390 339 358 359.8 281.4c5.2 11.2 6.2 23.7 6.2 36.8 0 51.2-44.8 92.8-100.1 92.8z' })
      )
    )
  );
};

exports.default = Icon;