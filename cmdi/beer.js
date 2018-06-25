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
      _react2.default.createElement('path', { d: 'M4 2h15l-2 20H6L4 2zm2.2 2l1.6 16h1L7.4 6.3C8.5 6 9.9 5.9 11 7c1.6 1.6 4.3.7 5.5.2l.3-3.2H6.2z' })
    )
  );
};

exports.default = Icon;