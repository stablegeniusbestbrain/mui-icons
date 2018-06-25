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
      _react2.default.createElement('path', { d: 'M10 3v5.7l3 3V6h4V3h-7zM3.3 4.5L2 5.8 8.3 12c-2.4.2-4.3 2.1-4.3 4.5C4 19 6 21 8.5 21c2.4 0 4.3-1.9 4.5-4.3l4.7 4.8 1.3-1.3-6-6-3-3-6.7-6.7zM20 7v3.8l-2.3-2.3-.7.7 2.8 2.8-2.8 2.8.7.7 2.3-2.3V17h.5l2.9-2.8-2.2-2.2 2.2-2.2L20.5 7H20zm1 1.9l.9.9-.9 1V8.9zm0 4.3l.9 1-.9.9v-1.9z' })
    )
  );
};

exports.default = Icon;