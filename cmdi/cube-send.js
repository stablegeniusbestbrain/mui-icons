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
      _react2.default.createElement('path', { d: 'M16 4L9 8v8l7 4 7-4V8m-7-1.7l3.8 2.2-3.8 2.2-3.8-2.2M0 7v2h7V7m4 3.1l4 2.3v4.7l-4-2.3m10-4.7v4.7l-4 2.3v-4.7M2 11v2h5v-2m-3 4v2h3v-2' })
    )
  );
};

exports.default = Icon;