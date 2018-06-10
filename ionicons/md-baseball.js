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
        _react2.default.createElement('path', { d: 'M365.9 402.6L343 416.1l-16-28 20.2-11.9c-5.2-8.5-9.8-17.4-13.9-26.7-1.4-3.1-2.7-6.3-3.9-9.5l-25.1 5.8-7.1-31.6 22.6-5.2c-2.8-12.1-4.7-24-5.5-37H290v-32h24.3c.8-12 2.7-24.8 5.5-36.8l-22.6-5.2 7.1-31.6 25.1 5.8c1.3-3.2 2.6-6.4 4-9.6 4.1-9.2 8.7-18.1 13.8-26.6L327 124.1l16-28 22.8 13.5c5.2-6.4 10.8-12.5 16.7-18.3C347.4 64.1 303.5 48 256 48s-91.4 16.1-126.5 43.2c5.9 5.8 11.5 12 16.7 18.3L169 96.1l16 28-20.2 11.9c5.1 8.5 9.8 17.4 13.8 26.6 1.4 3.2 2.7 6.4 4 9.6l25.1-5.8 7.1 31.6-22.6 5.2c2.8 12.1 4.6 24.8 5.5 36.8H222v32h-24.3c-.8 13-2.7 24.9-5.5 37l22.6 5.2-7.1 31.6-25.1-5.8c-1.2 3.2-2.5 6.3-3.9 9.5-4.1 9.2-8.7 18.1-13.9 26.7l20.2 11.9-16 28-22.9-13.5c-5.2 6.3-10.7 12.4-16.6 18.2 35.1 27.1 79 43.2 126.5 43.2s91.4-16.1 126.5-43.2c-5.9-5.8-11.4-11.9-16.6-18.2z' }),
        _react2.default.createElement('path', { d: 'M393.8 126l18.1 10.7-16 28-21.2-12.5c-5 8.3-9.5 16.9-13.3 25.9-.2.4-.4.9-.5 1.3l21 4.9-7.1 31.6-23.9-5.5c-2.3 9.7-3.8 19.6-4.6 29.6H370v32h-23.6c.8 10 2.3 20 4.6 29.8l23.9-5.5 7.1 31.6-21 4.9c.2.4.3.8.5 1.2 3.8 9 8.3 17.7 13.3 26l21.1-12.4 16 28-18 10.6c3.3 3.9 6.8 7.7 10.5 11.3l2 2C442 362 464 311.4 464 256s-22-106-57.7-143.4c-.7.7-1.4 1.3-2 2-3.7 3.7-7.2 7.5-10.5 11.4zM118.2 386.1l-18-10.6 16-28 21.1 12.4c5.1-8.3 9.5-17 13.3-26 .2-.4.3-.8.5-1.2l-21-4.9 7.1-31.6 23.9 5.5c2.3-9.8 3.8-19.8 4.6-29.8H142v-32h23.6c-.8-10-2.3-19.9-4.6-29.6l-23.9 5.5-7.1-31.6 21-4.9c-.2-.4-.3-.9-.5-1.3-3.8-9-8.2-17.7-13.3-25.9L116 164.6l-16-28 18.1-10.7c-3.4-3.9-6.9-7.7-10.6-11.4l-2-2C70 150 48 200.6 48 256s22 106 57.7 143.4c.7-.7 1.4-1.3 2-2 3.6-3.6 7.1-7.4 10.5-11.3z' })
      )
    )
  );
};

exports.default = Icon;