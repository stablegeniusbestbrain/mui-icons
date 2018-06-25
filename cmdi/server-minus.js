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
      _react2.default.createElement('path', { d: 'M4 4h16c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1zm5 4h1V6H9v2zM5 6v2h2V6H5zm3 10h8v2H8v-2z' })
    )
  );
};

exports.default = Icon;