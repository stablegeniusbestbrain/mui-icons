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
        _react2.default.createElement('path', { d: 'M448 357.4c0-14.9-7.9-24.3-13.1-30.6-1.4-1.6-3.2-3.8-3.8-5 .3-.6 1.2-1.9 1.9-2.8 4-5.2 10-13.2 10-31.1 0-16.4-9.7-24.4-15.4-29.1-.9-.8-2.1-1.7-2.9-2.5 11.1-16.1 6.5-36.2-3.7-47.7-10.5-11.8-20.3-13.2-46.4-11.7-18 1.1-55.5 6.9-80.2 10.8-10.1 1.6-18.9 3-21.6 3.2-12.7 1.3-15.2 0-16.4-4.9-.5-2.1 1.9-6.9 4.9-13 4-8.1 9.5-19.2 14.5-35.8 10.1-33.2 9-71.2-2.7-92.2-5.5-9.9-14.8-17.1-26.3-17.1s-20.3 2.4-24.9 7.9c-3.4 4-5.3 11.6-9.2 26.8-3.1 12.4-7 30.9-12 42-7.5 16.6-39.7 45.1-57 60.4-4.1 3.6-7.6 6.7-10.1 9.1-8.7 8.1-17.6 21.1-25.5 32.7-5.4 7.8-10.4 15.2-13.7 18.5-7.1 7.1-16.6 10.9-22.3 10.9-4.4 0-8 3.6-8 8V424c0 4.4 3.6 8 8 8 35.7 0 50.7 5.7 66.7 11.8 12.2 4.7 24.9 9.5 46.4 12.1 32.4 4 74.2 8.1 112.6 8.1 20.4 0 39.9-2 56.6-3.9 31-3.6 64.2-10.8 75.2-37 4.7-11.4 0-22.2-2.8-28.7-.3-.6-.5-1.2-.8-1.9.8-.6 1.6-1.4 2.4-2 7.1-6.1 19.6-16.3 19.6-33.1z' })
      )
    )
  );
};

exports.default = Icon;