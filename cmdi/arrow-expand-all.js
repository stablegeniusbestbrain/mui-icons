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
      _react2.default.createElement('path', { d: 'M9.5 13.1l1.4 1.4L6.4 19H10v2H3v-7h2v3.6l4.5-4.5zm1.4-3.6l-1.4 1.4L5 6.4V10H3V3h7v2H6.4l4.5 4.5zm3.6 3.6l4.5 4.5V14h2v7h-7v-2h3.6l-4.5-4.5 1.4-1.4zm-1.4-3.6L17.6 5H14V3h7v7h-2V6.4l-4.5 4.5-1.4-1.4z' })
    )
  );
};

exports.default = Icon;