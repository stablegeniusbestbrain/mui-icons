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
      _react2.default.createElement('path', { d: 'M4.5 5H8V2h2v3h1.5V2h2v3C19 5 19 11 16 11.3c4-.3 5 7.7-2.5 7.7v3h-2v-3H10v3H8v-3H4.5l.5-2h1c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1H4.5V5zM10 7v4s4.5.3 4.5-2S10 7 10 7zm0 5.5V17s5.5 0 5.5-2.2-5.5-2.3-5.5-2.3z' })
    )
  );
};

exports.default = Icon;