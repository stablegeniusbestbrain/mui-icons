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
      _react2.default.createElement('path', { d: 'M6 0h12c1.1 0 2 .9 2 2v20c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2zm6 6c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm-1-5v2h2V1h-2zM6 4v12.5c0-1.4 2.7-2.5 6-2.5s6 1.1 6 2.5V4H6zm7 14H9v2h4v2l3-3-3-3v2z' })
    )
  );
};

exports.default = Icon;