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
      _react2.default.createElement('path', { d: 'M16 2v6h1.1l-2.2 5h-.6L12 10V5H6v6h.9l-2 5H2v6h6v-6H7l2.1-5h1.2l1.7 2.3V19h6v-6h-.9l2.1-5H22V2m-4 2h2v2h-2M8 7h2v2H8m6 6h2v2h-2M4 18h2v2H4' })
    )
  );
};

exports.default = Icon;