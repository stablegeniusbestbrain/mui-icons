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
      _react2.default.createElement('path', { d: 'M14 20c0 1.1-.9 2-2 2s-2-.9-2-2h4zm5.7 1.6L17.2 19H3l3-3v-6c0-.7.1-1.3.3-1.9L3.5 5.3l1.4-1.4 2.4 2.4 13.9 13.9-1.5 1.4zM11 4.1V3c0-.6.4-1 1-1s1 .4 1 1v1.1c2.8.5 5 2.9 5 5.9v4.2L8.8 4.9c.6-.4 1.4-.7 2.2-.8z' })
    )
  );
};

exports.default = Icon;