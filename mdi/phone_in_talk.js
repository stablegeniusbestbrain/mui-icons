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
      _react2.default.createElement('path', { d: 'M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .3l-2.2 2.2c-2.8-1.5-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.3-1-.4-1.1-.6-2.3-.6-3.6 0-.5-.4-1-1-1H4c-.5 0-1 .5-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-5-4-9-9-9v2c3.9 0 7 3.1 7 7zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z' })
    )
  );
};

exports.default = Icon;