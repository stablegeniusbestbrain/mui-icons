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
      _react2.default.createElement('path', { d: 'M1 4.3L2.3 3 20 20.7 18.7 22l-2-2H0v-2h4c-1.1 0-2-.9-2-2V6c0-.2 0-.4.1-.6L1 4.3zM4 16h8.7L4 7.3V16zm16 0V6H7.8l-2-2H20c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h4v2h-2.2l-4-4H20z' })
    )
  );
};

exports.default = Icon;