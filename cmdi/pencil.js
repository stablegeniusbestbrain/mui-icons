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
      _react2.default.createElement('path', { d: 'M20.7 7c.4-.3.4-1 0-1.4l-2.3-2.3c-.4-.4-1.1-.4-1.4 0l-1.9 1.8 3.8 3.8M3 17.2V21h3.8l11-11.1-3.7-3.7L3 17.2z' })
    )
  );
};

exports.default = Icon;