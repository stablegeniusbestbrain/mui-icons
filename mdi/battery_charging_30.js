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
      _react2.default.createElement('path', { d: 'M15.7 4H14V2h-4v2H8.3C7.6 4 7 4.6 7 5.3v9.2h2L13 7v5.5h2l-1.1 2H17V5.3c0-.7-.6-1.3-1.3-1.3z' }),
      _react2.default.createElement('path', { d: 'M11 20v-5.5H7v6.2c0 .7.6 1.3 1.3 1.3h7.4c.7 0 1.3-.6 1.3-1.3v-6.2h-3.1L11 20z' })
    )
  );
};

exports.default = Icon;