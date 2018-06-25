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
      _react2.default.createElement('path', { d: 'M17 7h5v10h-5v2c0 .6.4 1 1 1h2v2h-2.5c-.6 0-1.5-.4-1.5-1 0 .6-.9 1-1.5 1H12v-2h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-2V2h2.5c.6 0 1.5.4 1.5 1 0-.6.9-1 1.5-1H20v2h-2c-.6 0-1 .4-1 1v2zM2 7h11v2H4v6h9v2H2V7zm18 8V9h-3v6h3z' })
    )
  );
};

exports.default = Icon;