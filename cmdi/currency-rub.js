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
      _react2.default.createElement('path', { d: 'M6 10h1V3h7.5C17 3 19 5 19 7.5S17 12 14.5 12H9v2h6v2H9v5H7v-5H6v-2h1v-2H6v-2zm8.5-5H9v5h5.5c1.4 0 2.5-1.1 2.5-2.5S15.9 5 14.5 5z' })
    )
  );
};

exports.default = Icon;