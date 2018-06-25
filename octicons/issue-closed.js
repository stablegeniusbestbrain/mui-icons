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
      _react2.default.createElement('path', { d: 'M10.5 15h3v3h-3v-3zm3-9h-3v7.5h3V6zm2.3 2.3l-1.5 1.5 3.7 3.7 6-6.7-1.5-1.5-4.5 5.2-2.2-2.2zM12 20.5A8.6 8.6 0 0 1 3.4 12c0-4.7 3.9-8.6 8.6-8.6 2.7 0 5.2 1.4 6.8 3.4l1.3-1.4A10.4 10.4 0 0 0 12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12l-2.3 2.3c-1 3.6-4.3 6.3-8.2 6.3z' })
    )
  );
};

exports.default = Icon;