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
      _react2.default.createElement('path', { d: 'M17 3l5.3 4.5L17 12l5.3 4.5L17 21v-3h-2.7l-2.9-2.8 2.2-2.1 1.9 1.9H17V9h-1.5l-9 9H2v-3h3.3l9-9H17V3zM2 6h4.5l2.8 2.8-2.1 2.1L5.3 9H2V6z' })
    )
  );
};

exports.default = Icon;