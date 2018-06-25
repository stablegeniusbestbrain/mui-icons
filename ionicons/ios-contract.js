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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M196 208H96v16h128V96h-16v100L75.1 64 64 75.1zm120 0h100v16H288V96h16v100L436.9 64 448 75.1zm-120 96H96v-16h128v128h-16V316L75.1 448 64 436.9zm120 0h100v-16H288v128h16V316l132.9 132 11.1-11.1z' })
      )
    )
  );
};

exports.default = Icon;