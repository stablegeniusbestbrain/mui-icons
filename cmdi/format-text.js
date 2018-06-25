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
      _react2.default.createElement('path', { d: 'M18.5 4l1.2 4.3-1 .3c-.5-.9-.9-1.7-1.4-2.2-.6-.4-1.2-.4-1.8-.4H13v10.5c0 .5 0 1 .3 1.3.4.2 1 .2 1.7.2v1H9v-1c.7 0 1.3 0 1.7-.2.3-.3.3-.8.3-1.3V6H8.5c-.6 0-1.2 0-1.8.4-.5.5-.9 1.3-1.4 2.2l-1-.3L5.5 4h13z' })
    )
  );
};

exports.default = Icon;