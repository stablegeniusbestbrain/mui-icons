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
      _react2.default.createElement('path', { d: 'M5 2c0-.6-.5-1-1-1s-1 .4-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.8 2.4 2 2.8V23h2v-4.2c1.2-.4 2-1.5 2-2.8v-2H9v2zm-8 0c0 1.3.8 2.4 2 2.8V23h2v-4.2c1.2-.4 2-1.5 2-2.8v-2H1v2zM21 6V2c0-.6-.4-1-1-1s-1 .4-1 1v4h-2v6h6V6h-2zm-8-4c0-.6-.4-1-1-1s-1 .4-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.8 2.4 2 2.8V23h2v-4.2c1.2-.4 2-1.5 2-2.8v-2h-6v2z' })
    )
  );
};

exports.default = Icon;