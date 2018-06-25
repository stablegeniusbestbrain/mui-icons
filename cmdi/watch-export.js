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
      _react2.default.createElement('path', { d: 'M14 11h5l-2.5-2.5 1.4-1.4 4.9 4.9-4.9 4.9-1.4-1.4L19 13h-5v-2zm-2 7c-3.3 0-6-2.7-6-6s2.7-6 6-6c1.4 0 2.7.5 3.7 1.3l1.4-1.4-.1-.2L16 0H8L7 5.7C5.2 7.2 4 9.5 4 12s1.2 4.8 3 6.3L8 24h8l1-5.7.1-.2-1.4-1.4c-1 .8-2.3 1.3-3.7 1.3z' })
    )
  );
};

exports.default = Icon;