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
      _react2.default.createElement('path', { d: 'M3 5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5zm9.5 6h-1c-.8 0-1.5-.7-1.5-1.5S10.7 8 11.5 8h1c.8 0 1.5.7 1.5 1.5h2C16 7.6 14.4 6 12.5 6h-1C9.6 6 8 7.6 8 9.5S9.6 13 11.5 13h1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5H8c0 1.9 1.6 3.5 3.5 3.5h1c1.9 0 3.5-1.6 3.5-3.5S14.4 11 12.5 11z' })
    )
  );
};

exports.default = Icon;