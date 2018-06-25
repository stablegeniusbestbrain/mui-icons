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
      _react2.default.createElement('path', { d: 'M9.3 3.3L5.2 6.7 4 5.3l4.1-3.4 1.2 1.4zm12.7 2l-1.2 1.4-4.1-3.4 1.2-1.4L22 5.3zM13 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0 2c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-1 1.5h1.5V12l3.2 1.5-.6 1.4L12 13V7.5zM1 14c0-2.5 1.1-4.7 2.9-6.2C3.3 9.1 3 10.5 3 12l.1 1.1-.1.9c0 2.3 1.3 4.3 3.1 5.3 1.3 1.2 3 2.1 4.8 2.5-.6.1-1.2.2-1.9.2-4.4 0-8-3.6-8-8z' })
    )
  );
};

exports.default = Icon;