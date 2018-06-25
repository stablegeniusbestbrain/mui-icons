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
      _react2.default.createElement('path', { d: 'M10.4 19.1c.3 1.1 1 1.1 1.4.1l5.4-11.4c.4-1 0-1.4-1-1L4.8 12.2c-1 .4-1 1.1.1 1.4L9 15l1.4 4.1z' })
    )
  );
};

exports.default = Icon;