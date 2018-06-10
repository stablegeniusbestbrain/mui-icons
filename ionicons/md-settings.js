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
        _react2.default.createElement('path', { d: 'M413.967 276.8c1.06-6.235 1.06-13.518 1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318c4.26-3.118 5.32-8.317 2.13-13.518l-42.55-71.764c-2.128-4.164-8.506-6.235-12.766-4.164l-53.186 20.8c-10.638-8.317-23.394-15.6-36.16-20.8l-7.448-55.117c-1.06-4.155-5.32-8.32-10.638-8.32h-85.098c-5.318 0-9.577 4.165-10.637 8.32l-8.507 55.116c-12.767 5.2-24.464 12.482-36.17 20.8l-53.187-20.8c-5.32-2.07-10.638 0-12.767 4.164L49.1 187.365c-2.12 4.153-1.06 10.4 2.13 13.518L96.97 235.2c0 7.282-1.06 13.518-1.06 20.8s1.06 13.518 1.06 20.8l-44.668 34.318c-4.26 3.118-5.318 8.317-2.13 13.518l42.55 71.764c2.13 4.164 8.507 6.235 12.766 4.164l53.187-20.8c10.637 8.317 23.394 15.6 36.16 20.8l8.508 55.117c1.07 5.2 5.318 8.32 10.637 8.32h85.098c5.32 0 9.578-4.165 10.638-8.32l8.518-55.116c12.757-5.2 24.464-12.482 36.16-20.8l53.187 20.8c5.32 2.07 10.638 0 12.768-4.164l42.55-71.765c2.128-4.153 1.06-10.4-2.13-13.518l-46.8-34.317zm-158.5 52c-41.488 0-74.46-32.235-74.46-72.8s32.972-72.8 74.46-72.8 74.462 32.235 74.462 72.8-32.973 72.8-74.462 72.8z' })
      )
    )
  );
};

exports.default = Icon;