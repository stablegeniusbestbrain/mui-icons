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
      _react2.default.createElement('path', { d: 'M6 9h4.5V0h3v9H18l-6 6-6-6zm16.5-6h-6v1.5h6v12h-21v-12h6V3h-6C.7 3 0 3.7 0 4.5V18c0 .8.7 1.5 1.5 1.5h8c-.4.9-1.3 2.1-3.5 3h12c-2.2-.9-3.1-2.1-3.5-3h8c.8 0 1.5-.7 1.5-1.5V4.5c0-.8-.7-1.5-1.5-1.5z' })
    )
  );
};

exports.default = Icon;