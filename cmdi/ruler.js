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
      _react2.default.createElement('path', { d: 'M1.4 18.4l1.8-1.8L4.6 18l1-1-1.4-1.5 1.4-1.4 2.5 2.5 1.1-1.1-2.5-2.4 1.4-1.5 1.4 1.5 1.1-1.1-1.4-1.4 1.4-1.4 2.5 2.4 1-1-2.5-2.5 1.5-1.4 1.4 1.4 1-1-1.4-1.5 1.4-1.4L18 6.7l1.1-1.1-2.5-2.4 1.8-1.8 4.2 4.2-17 17-4.2-4.2z' })
    )
  );
};

exports.default = Icon;