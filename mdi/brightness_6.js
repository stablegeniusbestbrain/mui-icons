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
      _react2.default.createElement('path', { d: 'M20 15.3l3.3-3.3L20 8.7V4h-4.7L12 .7 8.7 4H4v4.7L.7 12 4 15.3V20h4.7l3.3 3.3 3.3-3.3H20v-4.7zM12 18V6c3.3 0 6 2.7 6 6s-2.7 6-6 6z' })
    )
  );
};

exports.default = Icon;