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
        _react2.default.createElement('path', { d: 'M367.5 272h-223C91.2 272 48 315.2 48 368.5S91.2 464 144.5 464h223c53.3 0 96.5-42.2 96.5-95.5S420.8 272 367.5 272zM144 432c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm.5-192h223c53.3 0 96.5-42.2 96.5-95.5S420.8 48 367.5 48h-223C91.2 48 48 91.2 48 144.5S91.2 240 144.5 240zM368 80c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64z' })
      )
    )
  );
};

exports.default = Icon;