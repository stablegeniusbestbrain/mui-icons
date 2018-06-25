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
      _react2.default.createElement('path', { d: 'M20.4 8.9l-1 1.7-12.2-7 1-1.7 3.1 1.8 1.3-.4L17 5.8l.3 1.4 3.1 1.7zM6 19V7h5.1l6.9 4v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2z' })
    )
  );
};

exports.default = Icon;