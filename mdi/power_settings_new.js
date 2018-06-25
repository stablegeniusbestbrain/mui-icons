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
      _react2.default.createElement('path', { d: 'M13 3h-2v10h2V3zm4.8 2.2l-1.4 1.4C18 7.9 19 9.8 19 12c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-2.2 1-4.1 2.6-5.4L6.2 5.2C4.2 6.8 3 9.3 3 12c0 5 4 9 9 9s9-4 9-9c0-2.7-1.2-5.2-3.2-6.8z' })
    )
  );
};

exports.default = Icon;