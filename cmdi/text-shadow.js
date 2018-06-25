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
      _react2.default.createElement('path', { d: 'M3 3h13v3h-5v12H8V6H3V3zm9 4h2v2h-2V7zm3 0h2v2h-2V7zm3 0h2v2h-2V7zm-6 3h2v2h-2v-2zm0 3h2v2h-2v-2zm0 3h2v2h-2v-2zm0 3h2v2h-2v-2z' })
    )
  );
};

exports.default = Icon;