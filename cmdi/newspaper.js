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
      _react2.default.createElement('path', { d: 'M20 11H4V8h16m0 7h-7v-2h7m0 6h-7v-2h7m-9 2H4v-6h7m9.3-8.3L18.7 3 17 4.7 15.3 3l-1.6 1.7L12 3l-1.7 1.7L8.7 3 7 4.7 5.3 3 3.7 4.7 2 3v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3l-1.7 1.7z' })
    )
  );
};

exports.default = Icon;