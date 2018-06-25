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
        _react2.default.createElement('path', { d: 'M397.6 146.7l-1.8-1.7h18.4l8.5 7.8 22.5-22.8-40.8-40.3-23.2 22.3 8.8 9.2v18.6l-5-4.7c-31.3-28.3-70-45.2-113-48.9V48h-32v38h-2c-43.7 3-85 22.5-116 53v-17.8l8.9-9.2L108 89.8 67.2 130l22.5 22.8 8.5-7.8H116c-.3 0-.7.7-1 1.1-32.8 35.1-51 80.9-51 128.5C64 379 150.1 464 256.1 464 361.9 464 448 379.1 448 274.7c0-47.6-18-93.1-50.4-128zm-141.3 299c-95.5 0-173.1-76.7-173.1-170.9 0-94.3 77.7-170.9 173.1-170.9 95.5 0 173.1 76.7 173.1 170.9.1 94.2-77.6 170.9-173.1 170.9z' }),
        _react2.default.createElement('path', { d: 'M264 257.3V128h-16v129.4c-12.5 4.3-24 16.5-24 30.3 0 14.7 10 27 24 30.5l8 17.8 8-17.8c14-3.5 24-15.8 24-30.5 0-14.5-10.5-26.7-24-30.4z' })
      )
    )
  );
};

exports.default = Icon;