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
      _react2.default.createElement('path', { d: 'M20.6 6.7C19.7 5.6 18.4 5 16.9 5H3l1.6 3.6L2.4 19H6L8.3 8.6h3.1L9.2 19h3.6l2.3-10.4h1.8c.4 0 .7.1.9.3.2.3.3.6.2 1L16 19h3.7l1.8-8.3c.3-1.5 0-2.9-.9-4z' })
    )
  );
};

exports.default = Icon;