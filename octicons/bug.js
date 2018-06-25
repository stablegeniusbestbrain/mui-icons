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
      _react2.default.createElement('path', { d: 'M16.5 15H21v-1.5h-4.5V12l4.8-1.5-.6-1.5-4.2 1.5V9c0-.8-.7-1.5-1.5-1.5V6c0-.7-.5-1.3-1.2-1.5L15.3 3H18V1.5h-3.3l-3 3h-.9l-3-3H4.5V3h2.7l1.5 1.5c-.7.2-1.2.8-1.2 1.5v1.5C6.7 7.5 6 8.2 6 9v1.5L1.8 9l-.6 1.5L6 12v1.5H1.5V15H6v1.5L1.2 18l.6 1.5L6 18v1.5c0 .8.7 1.5 1.5 1.5H9l1.5-1.5V9H12v10.5l1.5 1.5H15c.8 0 1.5-.7 1.5-1.5V18l4.2 1.5.6-1.5-4.8-1.5V15zm-3-7.5H9V6h4.5v1.5z' })
    )
  );
};

exports.default = Icon;