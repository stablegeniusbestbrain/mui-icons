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
      _react2.default.createElement('path', { d: 'M17 18V5H7v13l5-2.2 5 2.2zm0-15c1.1 0 2 .9 2 2v16l-7-3-7 3V5c0-1.1.9-2 2-2h10zm-6 4h2v2h2v2h-2v2h-2v-2H9V9h2V7z' })
    )
  );
};

exports.default = Icon;