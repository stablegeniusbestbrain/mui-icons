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
      _react2.default.createElement('path', { d: 'M18 11h-7.2l1.5-1.6c.8-.8.8-2 0-2.8-.7-.8-2-.8-2.8 0L3.1 13l6.4 6.4c.4.4.9.6 1.4.6s1.1-.2 1.4-.6c.8-.8.8-2 0-2.8L10.8 15H18c1.1 0 2-.9 2-2s-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;