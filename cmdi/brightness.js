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
      _react2.default.createElement('path', { d: 'M4 4h4.7L12 .7 15.3 4H20v4.7l3.3 3.3-3.3 3.3V20h-4.7L12 23.3 8.7 20H4v-4.7L.7 12 4 8.7V4zm8 2v12c3.3 0 6-2.7 6-6s-2.7-6-6-6z' })
    )
  );
};

exports.default = Icon;