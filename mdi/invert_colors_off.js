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
      _react2.default.createElement('path', { d: 'M20.6 20.9l-2.3-2.4-6.3-6.3-3.6-3.5L7 7.3 4.3 4.5 3 5.8l2.8 2.7c-2.6 3.2-2.4 7.8.5 10.7 1.6 1.6 3.6 2.4 5.7 2.4 1.8 0 3.6-.6 5-1.8l2.7 2.7 1.3-1.3-.4-.3zM12 19.6c-1.6 0-3.1-.6-4.2-1.8C6.6 16.7 6 15.2 6 13.6c0-1.3.4-2.6 1.2-3.6l4.8 4.8v4.8zm0-14.5v4.6l7.3 7.2c1.3-2.9.8-6.5-1.7-9L12 2.3 8.3 6l1.4 1.4L12 5.1z' })
    )
  );
};

exports.default = Icon;