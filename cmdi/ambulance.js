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
      _react2.default.createElement('path', { d: 'M18 18.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm1.5-9H17V12h4.5l-2-2.5zM6 18.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zM20 8l3 4v5h-2c0 1.7-1.3 3-3 3s-3-1.3-3-3H9c0 1.7-1.3 3-3 3s-3-1.3-3-3H1V6c0-1.1.9-2 2-2h14v4h3zM8 6v3H5v2h3v3h2v-3h3V9h-3V6H8z' })
    )
  );
};

exports.default = Icon;