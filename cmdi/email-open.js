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
      _react2.default.createElement('path', { d: 'M4 8l8 5 8-5-8-5-8 5zm18 0v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-.7.4-1.4 1-1.7l9-5.7 9 5.7c.6.3 1 1 1 1.7z' })
    )
  );
};

exports.default = Icon;