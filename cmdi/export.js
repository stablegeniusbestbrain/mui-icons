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
      _react2.default.createElement('path', { d: 'M23 12l-4-4v3h-9v2h9v3M1 18V6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v3h-2V6H3v12h12v-3h2v3c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2z' })
    )
  );
};

exports.default = Icon;