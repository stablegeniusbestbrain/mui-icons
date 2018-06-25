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
      _react2.default.createElement('path', { d: 'M13 9h5.5L13 3.5V9zM6 2h8l6 6v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm.1 13.5l3.8 3.7 1.4-1.4-2.4-2.3 2.4-2.3-1.4-1.4-3.8 3.7zm11.2 0l-3.8-3.7-1.4 1.4 2.3 2.3-2.3 2.3 1.4 1.4 3.8-3.7z' })
    )
  );
};

exports.default = Icon;