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
        _react2.default.createElement('path', { d: 'M416 153h-25v-25h-14v25h-25v14h25v25h14v-25h25zm-52.7 210.9c-12.9-4.6-31.4-6.2-43.2-8.8-6.8-1.5-16.7-5.3-20-9.2-3.3-4-1.3-40.9-1.3-40.9s6.1-9.6 9.4-18c3.3-8.4 6.9-31.4 6.9-31.4s6.8 0 9.2-11.9c2.6-13 6.6-18.4 6.1-28.1-.5-9-5.2-9.5-5.7-9.5s4.9-13.6 5.6-42.4C331.1 129.6 305 96 256 96s-75 33.5-74.3 67.6c.6 28.7 5.6 42.4 5.6 42.4-.5 0-5.2.5-5.7 9.5-.5 9.7 3.6 14.9 6.1 27.9 2.4 11.9 9.2 12 9.2 12s3.6 23.1 6.9 31.5c3.3 8.5 9.4 18 9.4 18s2 36.9-1.3 40.9-13.2 7.7-20 9.2c-11.9 2.6-30.3 4.3-43.2 8.9C135.8 368.5 96 384 96 416h320c0-32-39.8-47.5-52.7-52.1z' })
      )
    )
  );
};

exports.default = Icon;