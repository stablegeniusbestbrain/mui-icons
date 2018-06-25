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
        _react2.default.createElement('path', { d: 'M183 62h24v64h-24zm0 204h24v64h-24zm91-87h64v24h-64zm23.9-72.9l-16.6-16.6-45.2 45.3 16.6 16.7zm-202.8 3l45.2 45.4 16.6-16.7-45.2-45.3zm-3 170l16.6 16.7 45.2-45.3-16.6-16.7zM58 179h64v24H58zM192.2 153.4l-34 34.2 43.4 43.5 34.1-34.1zM447 408.8L251.7 213l-34.1 34.1L413 443z' })
      )
    )
  );
};

exports.default = Icon;