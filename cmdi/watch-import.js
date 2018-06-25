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
      _react2.default.createElement('path', { d: 'M2 11h5L4.5 8.5l1.4-1.4 4.9 4.9-4.9 4.9-1.4-1.4L7 13H2v-2zm10 7c3.3 0 6-2.7 6-6s-2.7-6-6-6c-1.4 0-2.7.5-3.7 1.3L6.9 5.9l.1-.2L8 0h8l1 5.7c1.8 1.5 3 3.8 3 6.3s-1.2 4.8-3 6.3L16 24H8l-1-5.7-.1-.2 1.4-1.4c1 .8 2.3 1.3 3.7 1.3z' })
    )
  );
};

exports.default = Icon;