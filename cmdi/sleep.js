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
      _react2.default.createElement('path', { d: 'M23 12h-6v-2l3.4-4H17V4h6v2l-3.4 4H23v2zm-8 4H9v-2l3.4-4H9V8h6v2l-3.4 4H15v2zm-8 4H1v-2l3.4-4H1v-2h6v2l-3.4 4H7v2z' })
    )
  );
};

exports.default = Icon;