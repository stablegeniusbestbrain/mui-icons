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
      _react2.default.createElement('path', { d: 'M13.1 14.6l1.5-1.5 6.4 6.5-1.4 1.4zm4.3-5.8L20.3 6C16.3 2 9.9 2 6 6c3.9-1.3 8.3-.3 11.4 2.8zM6 6C2 9.9 2 16.3 6 20.3l2.8-2.9C5.7 14.3 4.7 9.9 6 6zm0 0c-.4 3 1.1 6.9 4.3 10l5.7-5.7C12.9 7.1 9 5.6 6 6z' })
    )
  );
};

exports.default = Icon;