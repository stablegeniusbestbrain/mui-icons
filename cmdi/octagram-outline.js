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
      _react2.default.createElement('path', { d: 'M2.2 16.1L3.9 12 2.2 7.9l4.1-1.6 1.6-4.1L12 3.9l4.1-1.7 1.6 4.1 4.1 1.6-1.7 4.1 1.7 4.1-4.1 1.6-1.6 4.1-4.1-1.7-4.1 1.7-1.6-4.1-4.1-1.6zM4.8 9L6 12l-1.2 3 3 1.2 1.2 3 3-1.2 3 1.2 1.2-3 3-1.2-1.2-3 1.2-3-3-1.2-1.2-3L12 6 9 4.8l-1.2 3-3 1.2z' })
    )
  );
};

exports.default = Icon;