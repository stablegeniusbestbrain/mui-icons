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
      _react2.default.createElement('path', { d: 'M11.1 15.2l-1.4-1.4 1.4-1.4 1.5 1.4 1.4-1.4-1.4-1.5L14 9.5l1.4 1.4 1.4-1.4L14 6.7l-7.1 7.1 2.8 2.8 1.4-1.4zm-8 3.8l3.1-3.1-2.1-2.1L14 3.9 16.1 6l1.4-1.4-1.4-1.4 1.4-1.5L21.8 6l-1.5 1.4L18.9 6l-1.4 1.4 2.1 2.1-9.9 9.9-2.1-2.1-4.5 4.5V19z' })
    )
  );
};

exports.default = Icon;