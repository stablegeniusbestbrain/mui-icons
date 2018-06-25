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
      _react2.default.createElement('path', { d: 'M20 19.2c.1 1-.6 1.8-1.5 1.8H14v-3l1-4H9c-1.7 0-3-1.3-3-3V3h6v6h5c1.1 0 2 .9 2 2l-2 7h1.4c.8 0 1.4.5 1.6 1.2zM5 12V3H3v9c0 2.8 2.2 5 5 5h4v-2H8c-1.7 0-3-1.3-3-3z' })
    )
  );
};

exports.default = Icon;