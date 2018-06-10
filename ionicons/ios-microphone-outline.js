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
        _react2.default.createElement('path', { d: 'M280 48h-48c-66 0-120 54-120 120v128c0 63.3 49.7 115.6 112 119.7V464h64v-48.3c62.3-4.2 112-56.4 112-119.7V168c0-66-54-120-120-120zm-40 400v-32h32v32h-32zm40-48h-48c-27.6 0-53.7-10.9-73.4-30.6-.5-.5-.9-1-1.4-1.4h197.7c-.5.5-.9 1-1.4 1.4-19.8 19.7-45.9 30.6-73.5 30.6zm87.5-48h-223c-10.7-16.6-16.5-35.9-16.5-56v-8h80v-16h-80v-32h80v-16h-80v-32h80v-16h-80v-8c0-27.6 10.9-53.7 30.6-73.4 13.9-13.9 30.9-23.4 49.4-27.8V112h16V64.3c2.6-.2 5.3-.3 8-.3h16v64h16V64h16c2.7 0 5.4.1 8 .3V112h16V66.8c18.5 4.4 35.6 13.9 49.4 27.8 19.7 19.7 30.6 45.8 30.6 73.4v8h-80v16h80v32h-80v16h80v32h-80v16h80v8c0 20.1-5.8 39.4-16.5 56z' })
      )
    )
  );
};

exports.default = Icon;