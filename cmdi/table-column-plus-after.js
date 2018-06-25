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
      _react2.default.createElement('path', { d: 'M11 2c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2V2h9zm-7 8v4h7v-4H4zm0 6v4h7v-4H4zM4 4v4h7V4H4zm11 7h3V8h2v3h3v2h-3v3h-2v-3h-3v-2z' })
    )
  );
};

exports.default = Icon;