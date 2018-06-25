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
      _react2.default.createElement('path', { d: 'M5 4h14c1.7 0 3 1.3 3 3v4h-7v-1H9v1H2V7c0-1.7 1.3-3 3-3zm6 7h2v2h-2v-2zm-9 1h7v1l2 2h2l2-2v-1h7v8H2v-8z' })
    )
  );
};

exports.default = Icon;