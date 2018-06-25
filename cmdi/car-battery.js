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
      _react2.default.createElement('path', { d: 'M4 3v3H1v14h22V6h-3V3h-6v3h-4V3H4zM3 8h18v10H3V8zm12 2v2h-2v2h2v2h2v-2h2v-2h-2v-2h-2zM5 12v2h6v-2H5z' })
    )
  );
};

exports.default = Icon;