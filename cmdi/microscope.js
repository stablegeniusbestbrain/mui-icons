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
      _react2.default.createElement('path', { d: 'M9.5 6.3L11 9c-2.5.3-4.5 2.4-4.5 5 0 2.8 2.2 5 5 5 2.1 0 3.8-1.2 4.6-3h-2.6v-2h8v2h-2.3c-.4 1.6-1.2 3-2.4 4h2.7v2h-16v-2h2.7c-1.7-1.5-2.7-3.6-2.7-6 0-3.6 2.5-6.8 6-7.7zm3.2-4.2l.8 1.3.9-.5 3.5 6-3.5 2-3.5-6 .9-.5-.8-1.3 1.7-1z' })
    )
  );
};

exports.default = Icon;