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
      _react2.default.createElement('path', { d: 'M15.8 18h4.5V3h-4.5v15zm-6-3h4.5V3H9.8v12zm-6 6h4.5V3H3.8v18zm-1.5 1.5h19.5v-21H2.3v21zM21.8 0H2.3A1.5 1.5 0 0 0 .8 1.5v21A1.5 1.5 0 0 0 2.3 24h19.5a1.5 1.5 0 0 0 1.5-1.5v-21A1.5 1.5 0 0 0 21.8 0z' })
    )
  );
};

exports.default = Icon;