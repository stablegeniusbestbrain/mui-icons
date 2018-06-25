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
      _react2.default.createElement('path', { d: 'M22 6.9l-1.4-1.4-2.9 3.2C15.7 6.4 12.8 5 9.6 5 6.7 5 4.1 6.2 2 8l1.4 1.4C5.1 7.9 7.3 7 9.6 7c2.7 0 5.1 1.3 6.8 3.2l-2.9 3.3-4-4L2 17l1.5 1.5 6-6 4 4 4.1-4.6c.7 1.4 1.2 2.9 1.4 4.6h2c-.2-2.3-.9-4.4-2-6.2l3-3.4z' })
    )
  );
};

exports.default = Icon;