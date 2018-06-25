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
      _react2.default.createElement('path', { d: 'M11 7v5.1l4.7 2.8.8-1.3-4-2.4V7m0-5C9 2 5.9 3.9 4.3 6.8L2 4.5V11h6.5L5.7 8.2C7 5.7 9.5 4 12.5 4c4.1 0 7.5 3.4 7.5 7.5S16.6 19 12.5 19c-3.3 0-6-2.1-7.1-5H3.3c1.1 4 4.8 7 9.2 7 5.2 0 9.5-4.3 9.5-9.5S17.7 2 12.5 2z' })
    )
  );
};

exports.default = Icon;