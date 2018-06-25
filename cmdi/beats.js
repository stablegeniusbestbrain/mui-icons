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
      _react2.default.createElement('path', { d: 'M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5c-1.1 0-2.2.4-3 1V2.5c.9-.3 2-.5 3-.5 5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12c0-3.7 2-6.9 5-8.7V12zm5-3c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z' })
    )
  );
};

exports.default = Icon;