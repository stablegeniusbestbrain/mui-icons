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
      _react2.default.createElement('path', { d: 'M2 15s0-6 6-6c4 0 4.5 3.5 7.5 3.5 4 0 4-3.5 4-3.5H22s0 6-6 6c-4 0-5.5-3.5-7.5-3.5-4 0-4 3.5-4 3.5H2' })
    )
  );
};

exports.default = Icon;