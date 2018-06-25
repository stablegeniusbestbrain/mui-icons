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
      _react2.default.createElement('path', { d: 'M9 1v1h1v3H9v1h3V5h-1V2h1V1M9 7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M1 9v3h1v-1h3v1h1V9H5v1H2V9m7 0h12v12H9m5-11v1h1v5h-4v-1h-1v3h1v-1h4v2h-1v1h3v-1h-1v-2h3v1h1v-3h-1v1h-3v-5h1v-1' })
    )
  );
};

exports.default = Icon;