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
      _react2.default.createElement('path', { d: 'M3 3h15v15H3V3zm16 16h2v2h-2v-2zm0-3h2v2h-2v-2zm0-3h2v2h-2v-2zm0-3h2v2h-2v-2zm0-3h2v2h-2V7zm-3 12h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2H7v-2z' })
    )
  );
};

exports.default = Icon;