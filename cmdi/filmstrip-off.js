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
      _react2.default.createElement('path', { d: 'M1 4.3L2.3 3 21 21.7 19.7 23 16 19.3V21H8v-2H6v2H4V7.3l-3-3zM18 9V7h-2v2h2zm0 4v-2h-2v2h2zm0 2h-1.2L6.8 5H8V3h8v2h2V3h2v15.2l-2-2V15zM8 13v-1.7l-.3-.3H6v2h2zm0 4v-2H6v2h2zM6 3v1.2L4.8 3H6z' })
    )
  );
};

exports.default = Icon;