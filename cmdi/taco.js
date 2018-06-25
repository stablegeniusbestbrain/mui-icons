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
      _react2.default.createElement('path', { d: 'M19 18H5c-2.2 0-4-1.8-4-4 0-4.4 3.6-8 8-8 1.1 0 2.1.2 3 .6.9-.4 1.9-.6 3-.6 4.4 0 8 3.6 8 8 0 2.2-1.8 4-4 4zM3 14c0 1.1.9 2 2 2s2-.9 2-2c0-2.4 1-4.5 2.7-6H9c-3.3 0-6 2.7-6 6zm16 2c1.1 0 2-.9 2-2 0-3.3-2.7-6-6-6s-6 2.7-6 6c0 .7-.2 1.4-.5 2H19z' })
    )
  );
};

exports.default = Icon;