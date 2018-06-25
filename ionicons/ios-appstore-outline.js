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
        _react2.default.createElement('path', { d: 'M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z' }),
        _react2.default.createElement('path', { d: 'M139.3 352l34.2-28.8-24.7-16.2zm202.9-54c-6.8 3.2-15.2 14-3.9 28.6 9.1 11.7 18 8.7 26.5 25.4 4.8-4.1 9.4-21.7 7.3-35.7-2.4-15.3-12.3-26.5-29.9-18.3zm-90.6-108.4c1.6-2.7.6-6.3-2.1-7.9l-15.1-8.6c-2.8-1.6-6.3-.6-7.9 2.1L189.1 240l-18.5 32-16.9 29.2 24.9 15 25.5-44.3 18.4-32 29.1-50.3zm-21 50.4l-18.5 32h89.2l-18.1-32zM351 272h33v-32h-51zm-169.9-32H128v32h34.6zm143.5 0l-60-105.8c-1.6-2.8-5.2-3.7-7.9-2.1l-15.1 8.6c-2.8 1.6-3.7 5.1-2.1 7.9l51.7 91.4 18.1 32 .2.3.5-.3 24.4-14.8-9.8-17.2zm18.6 32l-4.9-8.7-14.4 8.7-10.4 6.3 13 23 24.9-15.1z' })
      )
    )
  );
};

exports.default = Icon;