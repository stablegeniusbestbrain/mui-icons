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
      _react2.default.createElement('path', { d: 'M9 3v6h.7l-3.9 7H2v6h6v-2h8v2h6v-6h-3.8l-3.9-7h.7V3m-4 2h2v2h-2m1 2l4 7.2V18H8v-1.8M4 18h2v2H4m14-2h2v2h-2' })
    )
  );
};

exports.default = Icon;