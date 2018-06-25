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
        _react2.default.createElement('path', { d: 'M347.9 64c4 0 9 1 14 3l-38.8 39-5.9 5.9 1.5 8.2 9.2 51.2 2 10.9 10.9 2 51.2 9.3 8.3 1.5 5.9-5.9 39-39.2c3 7.1 3 13 2.9 15.4-.7 12-5.7 30.5-25 49.8-14.9 14.9-39.3 24.9-60.8 24.9-9.5 0-17.9-1.9-25-5.6-3.5-1.8-9-4.2-15.9-4.2-5.6 0-14 1.7-22.3 9.7-9 8.8-181.3 192.4-188.7 200.2l-.2.2-.2.2c-5.7 6.6-13.4 7.6-17.5 7.6-7.4 0-14.7-3-20.1-8.2-5.4-5.5-8.5-13.4-8.2-21.2.2-4.6 1.6-11.2 7.5-16.2l.3-.2.3-.2c7.8-7.4 192.3-181.1 199.9-188.6 7.9-7.9 9.6-16.2 9.7-21.8 0-6.9-2.4-12.6-3.5-15.4-18.2-42.7 10.2-77.6 19.4-87.2 17.3-18.4 39.7-24.2 49.2-24.7 0-.4.4-.4.9-.4m0-16c-.7 0-1.4 0-2 .1-12.5.7-39.3 7.7-60 29.7-20.1 21.2-41.1 60.6-22.5 104.5 2.2 5.3 4.7 12.3-2.7 19.7C253.1 209.4 61 390.3 61 390.3c-18 15.5-16.7 44.2-.1 60.9 8.5 8.4 20 12.8 31.3 12.8 11.1 0 21.9-4.2 29.6-13.1 0 0 179.4-191.1 188.2-199.8 4-3.9 7.7-5.1 11.1-5.1 3.3 0 6.3 1.2 8.6 2.4 9.9 5.1 21 7.4 32.4 7.4 26.8 0 55-12.4 72.2-29.6 24.4-24.4 28.9-48 29.6-60.1.7-12-3.4-27.9-16.7-41.1l-52.5 52.7-51.2-9.3-9.2-51.2 52.5-52.7C375.7 53.4 360 48 347.9 48z' }),
        _react2.default.createElement('path', { d: 'M102.5 429.3c-5.5 5.4-14.4 5.4-19.9 0-5.4-5.5-5.4-14.4 0-19.9 5.5-5.4 14.4-5.4 19.9 0 5.4 5.6 5.4 14.5 0 19.9z' })
      )
    )
  );
};

exports.default = Icon;