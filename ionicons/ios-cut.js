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
        _react2.default.createElement('path', { d: 'M308 277.2c25.5-33 80.5-111.5 90.2-135.4 7.2-17.6 10.6-32.8 10.4-46.2-.2-17.9-6-29.3-18.3-40.6-5.2-4.8-13.5-6.9-20-6.9L255.9 201.7l-10 13.4-2.9 3.9-.1.1-14.5 19.7c-.1.1-.2.3-.3.4-.5.8-7.5 10.9-15.2 22.7-3 4.6-6.1 9.5-9 14.1-3.5 5.6-6.6 11-8.8 15.2-3.6 7.1-7.3 14.4-10.7 21.5-3.7 7.5-7.2 14.6-10.4 20.7-10.2-7.3-22-11.1-34.3-11.1-17.5 0-33.7 7.7-45.8 21.6C82.4 357.1 76 374.6 76 393.1s6.4 36 17.9 49.3c12.1 13.9 28.4 21.6 45.8 21.6 14.4 0 28-5.2 39.2-15 10.5-9.1 18-21.3 21.8-35.4 1-3.1 11.6-34.7 26.1-57.3 9.2-14.4 22.2-23.4 29.6-27.8l13.5-9.7c0 .1 12.7-8.7 38.1-41.6zM139.9 421.1c-13.3 0-24-12.6-24-28s10.7-28 24-28 24 12.6 24 28-10.8 28-24 28zm116.2-132.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z' }),
        _react2.default.createElement('path', { d: 'M191.5 260.4c.7 1 1.6 1.9 2.5 2.7 1.7-2.8 3.6-5.7 5.4-8.6l46.5-65.8L140.9 48c-8.9 0-14.4.9-18.5 3.9-11.9 8.9-19.1 25.6-19.3 43.6-.2 13.5 3.3 28.6 10.4 46.2 8.6 21 42.6 70.2 78 118.7zM372 322.3c-12.3 0-24.1 3.8-34.3 11.1-3.2-6.1-6.7-13.2-10.4-20.7-3.4-6.9-6.9-14-10.4-20.8L306 305.8l-36.4 33.1c5.2 4.6 10.7 10.4 15.3 17.5 14.5 22.6 25 54.2 26.1 57.3 3.8 14.1 11.3 26.3 21.8 35.4 11.3 9.8 24.9 15 39.2 15 35.3 0 64-31.8 64-70.9s-28.7-70.9-64-70.9zm.1 98.8c-13.3 0-24-12.6-24-28s10.7-28 24-28 24 12.6 24 28-10.7 28-24 28z' })
      )
    )
  );
};

exports.default = Icon;