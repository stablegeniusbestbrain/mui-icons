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
      _react2.default.createElement('path', { d: 'M17 8C8 10 5.9 16.2 3.8 21.3l1.9.7 1-2.3c.4.2.9.3 1.3.3C19 20 22 3 22 3c-1 2-8 2.3-13 3.3s-7 5.2-7 7.2 1.8 3.8 1.8 3.8C7 8 17 8 17 8z' })
    )
  );
};

exports.default = Icon;