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
      _react2.default.createElement('path', { d: 'M15 21h2v-2h-2m4 2h2v-2h-2M7 21h2v-2H7m4 2h2v-2h-2m8-2h2v-2h-2m0-2h2v-2h-2M3 3v18h2V5h16V3m-2 6h2V7h-2' })
    )
  );
};

exports.default = Icon;