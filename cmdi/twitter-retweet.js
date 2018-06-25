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
      _react2.default.createElement('path', { d: 'M6 5.8l4.3 4.2H7v6h6.5l2 2H7c-1.1 0-2-.9-2-2v-6H1.8L6 5.8zm12 12.5L13.8 14H17V8h-6.5l-2-2H17c1.1 0 2 .9 2 2v6h3.3L18 18.3z' })
    )
  );
};

exports.default = Icon;