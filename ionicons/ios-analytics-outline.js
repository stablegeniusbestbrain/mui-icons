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
        _react2.default.createElement('path', { d: 'M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0s-81.2 212.9 0 294.2c81.2 81.2 212.9 81.2 294.2 0 81.2-81.2 81.2-213 0-294.2zm-281.9 12.3c74.3-74.3 195.3-74.3 269.6 0 38 38 56.5 88.1 55.7 138-2.9-4.6-23.1-35.2-52.5-35.2-27.9 0-42.3 26.1-51.8 43.3-1.4 2.6-2.8 5-4 7.1-11.6 19.5-27.7 30.4-43.1 29.3-13.6-1-25.2-11.3-32.6-29.2-9.3-22.4-29.6-46.5-53.7-49.9-11.4-1.6-28.6.9-45.3 21.7-3.3 4.1-7 9.5-11.2 15.9-10.6 15.7-26.5 39.4-38.7 41.4-21 3.4-36.6-12.2-39.3-14.6-2-1.7-4.4-4.3-7.3-7.6-7.5-56.9 10.5-116.6 54.2-160.2zm269.6 269.6c-74.3 74.3-195.3 74.3-269.6 0-24.2-24.2-40.5-53.3-48.9-84.1 7 5.7 19.3 13.3 35.5 13.3 2.7 0 5.6-.2 8.5-.7 19-3.1 35.8-28.1 49.4-48.2 3.9-5.8 7.5-11.2 10.4-14.8 9.7-12 20-17.4 30.6-15.9 12.9 1.8 31.1 16.2 41.1 40.2 9.9 23.7 26.3 37.6 46.3 39 21.6 1.5 43.3-12.4 58-37.1 1.4-2.3 2.8-4.8 4.2-7.5 8.6-15.6 19.3-35.1 37.7-35.1 11.1 0 20.9 7.3 27.2 13.4 7.4 7.2 9 9 12.9 14.6 3.4 4.8 6.5 8.7 10.3 16.7-5.8 38.9-23.7 76.3-53.6 106.2z' })
      )
    )
  );
};

exports.default = Icon;