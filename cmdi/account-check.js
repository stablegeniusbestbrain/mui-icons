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
      _react2.default.createElement('path', { d: 'M9 5c1.9 0 3.5 1.6 3.5 3.5S10.9 12 9 12s-3.5-1.6-3.5-3.5S7.1 5 9 5zm0 8.8c3.9 0 7 1.5 7 3.5V19H2v-1.7c0-2 3.1-3.5 7-3.5zm8-1.1l-2.7-3 1.1-1.2 1.6 1.6 3.6-3.6 1.2 1.4-4.8 4.8z' })
    )
  );
};

exports.default = Icon;