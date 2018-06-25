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
      _react2.default.createElement('path', { d: 'M13 16.1c3.5-.4 6.2-3.3 6.2-6.9 0-3.9-3.2-7-7-7s-7 3.1-7 7c0 3.4 2.5 6.3 5.8 6.9V20H5v2h14v-2h-6v-3.9z' })
    )
  );
};

exports.default = Icon;