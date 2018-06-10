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
        _react2.default.createElement('path', { d: 'M76.1 187c0-38.1 22.2-71 55.3-85h-7.1c-28.7 0-60.7 30.4-66.3 69.8-5.6.9-9.9 7.3-9.9 14.9 0 8 4.7 14.3 10.8 14.8 4.2 30 35.7 59 56.9 65.4l10.1 3.2c-27.8-15.8-49.8-48.8-49.8-83.1z' }),
        _react2.default.createElement('path', { d: 'M450.2 102.8c-1-2.7-2.1-5.2-3.2-7.7-6-13.4-13.4-24.2-21.7-32.2-10.5-9.7-21.4-14.9-34.8-14.9s-21.5 5.2-25.8 7.8c-43.1 25.9-112.3 46-154 46s-63.4.2-63.4.2c-31.6 14-54.8 46.9-54.8 85 0 34.2 17.8 64.2 44.4 80 12.1 10.1 45.6 8.8 43.1 22.2-2.5 13.4-20.5 109.5-23 127s-2.9 23.5 4 32c7 8.5 41.5 15.8 60 15.8s21.8-8.7 21.8-43.8-17.3-131.7 8.5-131.7c48.3 0 81.5 17.3 119.3 31.7 9 3.4 14.1 4.7 20.1 4.7 6 0 18.7-1.9 34.7-18.2 9.2-9.4 15.7-18.8 21.7-32.2 1.1-2.6 2.2-5.2 3.2-8 8.9-23.2 13.7-51.9 13.7-81.9 0-29.8-4.8-58.6-13.8-81.8zm-18.5 160.5c-7.2 16.4-19.9 29.6-30.4 29.6s-20.1-13.1-27.3-29.6c-8.4-19.2-13.8-47.2-13.8-78.2 0-31.3 5.4-59.3 13.9-78.5 7.2-16.3 16.8-26.2 27.2-26.2 10.5 0 23 9.9 30.3 26.2 8.5 19.2 16.4 47.2 16.4 78.5 0 31-7.8 59-16.3 78.2z' })
      )
    )
  );
};

exports.default = Icon;