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
      _react2.default.createElement('path', { d: 'M6 11c1.1 0 2 .9 2 2v4H4c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2zm-2 2v2h2v-2H4zm16 0v2h2v2h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2v2h-2zm-8-6v4h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V7h2zm0 8h2v-2h-2v2z' })
    )
  );
};

exports.default = Icon;