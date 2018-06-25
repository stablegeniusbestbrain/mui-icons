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
      _react2.default.createElement('path', { d: 'M17.1 12.9q0-2.5-1.7-4.3t-4.3-1.7-4.2 1.7-1.8 4.3 1.8 4.2 4.2 1.8 4.3-1.8 1.7-4.2zm1.8 0q0 1.5-.7 3t-1.6 2.4-2.5 1.7-3 .6-3-.6-2.4-1.7T4 15.9t-.6-3 .6-3 1.7-2.5 2.4-1.6 3-.7 3 .7 2.5 1.6 1.6 2.5.7 3z' })
    )
  );
};

exports.default = Icon;