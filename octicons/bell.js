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
      _react2.default.createElement('path', { d: 'M22.5 18v1.5h-21V18l1.1-.9c1.2-1.1 1.2-3.8 1.8-6.6C5.5 4.8 10.5 3 10.5 3c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 0 5.1 1.8 6.2 7.5.6 2.8.7 5.5 1.8 6.6l1 .9zM12 24c1.7 0 3-1.3 3-3H9c0 1.7 1.3 3 3 3z' })
    )
  );
};

exports.default = Icon;