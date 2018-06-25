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
        _react2.default.createElement('path', { d: 'M296.6 151.6l-3.3-1.2-28 104.6 75 75c1-1.1 1.9-2.2 2.8-3.3 16.1-20 24.9-44.7 24.9-70.7 0-29.9-11.7-58-32.8-79.2-11.2-11.2-24.3-19.7-38.6-25.2zm-18.5-5.4c-1.4-.3-2.9-.5-4.3-.8-5.8-.9-11.8-1.4-17.8-1.4-29.9 0-58 11.7-79.2 32.8C155.7 198 144 226.1 144 256c0 5.9.5 11.8 1.4 17.5.2 1.5.5 3 .8 4.4L250.4 250l27.7-103.8zM150.5 293.7l1.2 3.3c5.6 14.1 14 27.1 25.1 38.2C198 356.3 226.1 368 256 368c25.6 0 50-8.6 69.7-24.3 1.1-.8 2.1-1.7 3.1-2.6l-74.9-74.9-103.4 27.5z' }),
        _react2.default.createElement('path', { d: 'M448 272.8v-32l-33.3-8.7-2.6-13.2 27.6-20.9-12.2-29.6-34.4 4.8-7.5-10.6 17.7-29.7-22.6-22.6-30.2 17.4-10.7-7.3 5.3-35L315.6 73 294 101.3l-12.3-2.6L273 64h-32l-9.2 34.9-12.1 2.4-21.5-29-29.6 12.3 4.8 35.7-11.7 7.2-31.3-18.7-22.6 22.6 18.8 31.5-6.7 10.5-35.5-5L72.3 198l28.9 21.7-2.4 12.2-34.8 8.9v32l34.7 8.9 2.4 12.5-28.4 21.3L85 345.1l35-5 7.1 11.3-17.9 30.6 22.6 22.6 30.2-18.2 11.2 7.3-4.5 34.3 29.6 12.2 20.6-27.8 13.4 2.5 8.8 33.1h32l8.3-33.1 13.6-2.6 20.7 27.1 29.6-12.2-5-33.7 10.2-7.4 29 16.9 22.6-22.6-16.8-28.9 7.9-11.4 33.8 4.8 12.3-29.5-27.3-20.5 2.7-13.5 33.3-8.6zM256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128-57.3 128-128 128z' })
      )
    )
  );
};

exports.default = Icon;