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
      _react2.default.createElement('path', { d: 'M16.7 4H15V2H9v2H7.3C6.6 4 6 4.6 6 5.3v15.4c0 .7.6 1.3 1.3 1.3h9.4c.7 0 1.3-.6 1.3-1.3V5.3c0-.7-.6-1.3-1.3-1.3zM11 20v-5.5H9L13 7v5.5h2' })
    )
  );
};

exports.default = Icon;