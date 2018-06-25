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
      _react2.default.createElement('path', { d: 'M22 11h-4.2l3.3-3.2-1.4-1.5L15 11h-2V9l4.7-4.7-1.5-1.4L13 6.2V2h-2v4.2L7.8 2.9 6.3 4.3 11 9v2H9L4.3 6.3 2.9 7.8 6.2 11H2v2h4.2l-3.3 3.2 1.4 1.5L9 13h2v2l-4.7 4.7 1.5 1.4 3.2-3.3V22h2v-4.2l3.2 3.3 1.5-1.4L13 15v-2h2l4.7 4.7 1.4-1.5-3.3-3.2H22z' })
    )
  );
};

exports.default = Icon;