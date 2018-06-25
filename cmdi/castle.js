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
      _react2.default.createElement('path', { d: 'M2 13h2v2h2v-2h2v2h2v-2h2v2h2v-5l3-3V1h2l4 2-4 2v2l3 3v12H11v-3c0-1.1-.9-2-2-2s-2 .9-2 2v3H2v-9zm16-3c-.6 0-1 .5-1 1.2V13h2v-1.8c0-.7-.4-1.2-1-1.2z' })
    )
  );
};

exports.default = Icon;