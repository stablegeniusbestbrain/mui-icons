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
      _react2.default.createElement('path', { d: 'M11 10H5L3 8l2-2h6V3l1-1 1 1v1h6l2 2-2 2h-6v2h6l2 2-2 2h-6v6c1.1 0 2 .9 2 2H9c0-1.1.9-2 2-2V10z' })
    )
  );
};

exports.default = Icon;