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
      _react2.default.createElement('path', { d: 'M21 17V3H7v14h14zm0-16c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h14zM3 5v16h16v2H3c-1.1 0-2-.9-2-2V5h2zm10 0h2c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm0 2v6h2V7h-2z' })
    )
  );
};

exports.default = Icon;