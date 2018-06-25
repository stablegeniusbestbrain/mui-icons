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
      _react2.default.createElement('path', { d: 'M7 24h2v-2H7v2zm5-11c1.7 0 3-1.3 3-3V4c0-1.7-1.3-3-3-3S9 2.3 9 4v6c0 1.7 1.3 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.5 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.4 2.7 6.2 6 6.7V20h2v-3.3c3.3-.5 6-3.3 6-6.7z' })
    )
  );
};

exports.default = Icon;