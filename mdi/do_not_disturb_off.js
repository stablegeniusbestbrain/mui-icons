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
      _react2.default.createElement('path', { d: 'M17 11v2h-1.5l4.7 4.7c1.1-1.6 1.8-3.6 1.8-5.7 0-5.5-4.5-10-10-10-2.1 0-4.1.7-5.7 1.8l7.2 7.2H17zM2.3 2.3L1 3.5l2.8 2.8C2.7 7.9 2 9.9 2 12c0 5.5 4.5 10 10 10 2.1 0 4.1-.7 5.7-1.8l2.8 2.8 1.2-1.3L11 11 2.3 2.3zM7 13v-2h1.5l2 2H7z' })
    )
  );
};

exports.default = Icon;