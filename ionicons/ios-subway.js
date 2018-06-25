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
        _react2.default.createElement('path', { d: 'M344 48H168c-35.2 0-64 28.8-64 64v224c0 35.2 28.8 64 64 64h176c35.2 0 64-28.8 64-64V112c0-35.2-28.8-64-64-64zM200 72h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H200c-4.4 0-8-3.6-8-8s3.6-8 8-8zm-32 304c-15.5 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28zm176 0c-15.5 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28zm40-152c0 8.8-7.2 16-16 16H144.2c-8.8 0-16.2-7.2-16.2-16v-95.8c0-8.8 7.4-16.2 16.2-16.2H368c8.8 0 16 7.4 16 16.2V224zm-14.8 240H392l-49.3-48h-22.8l16.1 16H176l16.1-16h-22.8L120 464h22.8l17.1-16h192.2z' })
      )
    )
  );
};

exports.default = Icon;