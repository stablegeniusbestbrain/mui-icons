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
      _react2.default.createElement('path', { d: 'M19 5c0-1.1-.9-2-2-2h-7L7.7 5.3 19 16.7V5zM3.6 3.9L2.4 5.2 5 7.8V19c0 1.1.9 2 2 2h10c.4 0 .7-.1 1-.3l1.8 1.9 1.3-1.3L3.6 3.9z' })
    )
  );
};

exports.default = Icon;