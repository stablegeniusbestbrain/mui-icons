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
      _react2.default.createElement('path', { d: 'M24 13.5L19.5 9V3h-3v3L12 1.5l-12 12h3L4.5 21c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5l1.5-7.5h3zM18 21h-4.5v-6h-3v6H6l-1.8-9.5L12 3.8l7.8 7.7L18 21z' })
    )
  );
};

exports.default = Icon;