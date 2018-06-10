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
        _react2.default.createElement('path', { d: 'M342.9 165.4l9.1-6.4 9.1 6.4 22.9 14.5V64h-64v115.9l22.9-14.5z' }),
        _react2.default.createElement('path', { d: 'M432 64h-32v146.5l-48-32-48 32V64h-22.4c-8.1 0-17.6 7.2-17.6 15v329l-8 5.5-8-5.5V79c0-7-9.2-15-17.6-15H80c-18.8 0-33 13.3-33 32v286.1c0 18.8 14.2 33.9 33 33.9h143.3c13.8 0 24.7 4.2 24.7 19.4V448h16v-12.6c0-15.3 10.9-19.4 24.7-19.4H432c18.8 0 33-15.1 33-33.9V96c0-18.7-14.2-32-33-32z' })
      )
    )
  );
};

exports.default = Icon;