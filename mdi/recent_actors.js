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
      _react2.default.createElement('path', { d: 'M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V6c0-.5-.4-1-1-1zM8 7.8c1.2 0 2.3 1 2.3 2.2S9.2 12.3 8 12.3 5.8 11.2 5.8 10s1-2.2 2.2-2.2zm4.5 9.2h-9v-.7c0-1.5 3-2.3 4.5-2.3s4.5.8 4.5 2.3v.7z' })
    )
  );
};

exports.default = Icon;