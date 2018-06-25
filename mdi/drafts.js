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
      _react2.default.createElement('path', { d: 'M22 8c0-.7-.4-1.3-1-1.7L12 1 3 6.3c-.6.4-1 1-1 1.7v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8zm-10 5L3.7 7.8 12 3l8.3 4.8L12 13z' })
    )
  );
};

exports.default = Icon;