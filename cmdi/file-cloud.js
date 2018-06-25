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
      _react2.default.createElement('path', { d: 'M13 9h5.5L13 3.5V9zM6 2h8l6 6v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm9.7 13c-.4-1.7-1.9-3-3.7-3-1.4 0-2.7.8-3.3 2-1.5.2-2.7 1.5-2.7 3 0 1.7 1.3 3 3 3h6.5c1.4 0 2.5-1.1 2.5-2.5 0-1.3-1-2.4-2.3-2.5z' })
    )
  );
};

exports.default = Icon;